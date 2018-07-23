import * as chai from 'chai';
import { expect } from 'chai';
import { SinonSpy, spy } from 'sinon';
import * as sinonChai from 'sinon-chai';
import { Observable, of as observableOf, Subject, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { multiScan } from './multi-scan';

chai.use(sinonChai);

function observedValue<T>(observer: SinonSpy): T {
  const [first] = observer.getCall(observer.callCount - 1).args;

  return first;
}

describe('multiScan', () => {
  describe('add/subtract', () => {
    beforeEach(() => {
      result$ = multiScan(
        add, (left, right) => left + right,
        subtract, (left, right) => left - right,
        0);
      resultObserver = spy();
      result$.pipe(
        takeUntil(destroy),
      ).subscribe(resultObserver);
    });
    afterEach(() => {
      destroy.next();
    });
    afterAll(() => {
      destroy.complete();
    });

    const add: Subject<number> = new Subject();
    const subtract: Subject<number> = new Subject();
    let result$: Observable<number>;
    let resultObserver: sinon.SinonSpy;
    let destroy: Subject<void> = new Subject();

    it('adds 3 then subtracts 2', () => {
      add.next(3);

      expect(resultObserver.calledOnce).to.be.true;
      expect(observedValue(resultObserver)).to.equal(3);

      subtract.next(2);
      expect(resultObserver.calledTwice).to.be.true;
      expect(observedValue(resultObserver)).to.equal(1);
    });

    it('adds 10 two times then subtracts 5 then adds 6', () => {
      add.next(10);
      add.next(10);
      subtract.next(5);
      add.next(6);

      expect(resultObserver.callCount).to.equal(4);
      expect(observedValue(resultObserver)).to.equal(21);
    });

    it('adds 2 then subtracts 6 two times', () => {
      add.next(2);
      subtract.next(6);
      subtract.next(6);

      expect(resultObserver.calledThrice).to.be.true;
      expect(observedValue(resultObserver)).to.equal(-10);
    });
  });

  describe('sources', () => {
    it('handles multiple source types', () => {
      interface XyState {
        readonly xs: number;
        readonly ys: number;
      };

      const x: Subject<'x'> = new Subject();
      const y: Subject<'y'> = new Subject();
      const xys: Observable<XyState> = multiScan(
        x, state => ({ ...state, xs: state.xs + 1 }),
        y, state => ({ ...state, ys: state.ys + 1 }),
        { xs: 0, ys: 0 });
      const observer: SinonSpy = spy();

      const subscription: Subscription = xys.subscribe(observer);
      x.next('x');
      y.next('y');
      y.next('y');

      expect(observedValue(observer)).to.deep.equal({ xs: 1, ys: 2 });
      subscription.unsubscribe();
    });
  });

  describe('pipe', () => {
    it('handles map', () => {
      function add(a: number, b: number): number {
        return a + b;
      }

      const one$: Observable<1> = observableOf(1) as any;
      const two$: Observable<2> = observableOf(2) as any;
      const three$: Observable<3> = observableOf(3) as any;
      const sum$: Observable<number> = multiScan(
        one$, add,
        two$, add,
        three$, add,
        0);
      const sumMessage$: Observable<string> = sum$.pipe(
        map(sum => `The sum is ${sum}`),
      );
      const sumObserver: SinonSpy = spy();
      const messageObserver: SinonSpy = spy()

      const sumSubscription: Subscription = sum$.subscribe(sumObserver);
      const messageSubscription: Subscription = sumMessage$.subscribe(messageObserver);

      expect(observedValue(sumObserver)).to.equal(6);
      expect(observedValue(messageObserver)).to.equal('The sum is 6');
      sumSubscription.unsubscribe();
      messageSubscription.unsubscribe();
    });
  });
});
