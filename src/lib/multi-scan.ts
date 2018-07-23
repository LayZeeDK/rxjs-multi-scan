import { merge, Observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';

export function multiScan<TSource, TSink>(
  source: Observable<TSource>,
  reducer: (accumulator: TSink, value: TSource) => TSink,
  initialValue: TSink,
): Observable<TSink>;
export function multiScan<TSource1, TSource2, TSink>(
  source1: Observable<TSource1>,
  reducer1: (accumulator: TSink, value: TSource1) => TSink,
  source2: Observable<TSource2>,
  reducer2: (accumulator: TSink, value: TSource2) => TSink,
  initialValue: TSink,
): Observable<TSink>;
export function multiScan<TSource1, TSource2, TSource3, TSink>(
  source1: Observable<TSource1>,
  reducer1: (accumulator: TSink, value: TSource1) => TSink,
  source2: Observable<TSource1>,
  reducer2: (accumulator: TSink, value: TSource2) => TSink,
  source3: Observable<TSource1>,
  reducer3: (accumulator: TSink, value: TSource3) => TSink,
  initialValue: TSink,
): Observable<TSink>;
export function multiScan<TSource1, TSource2, TSource3, TSource4, TSink>(
  source1: Observable<TSource1>,
  reducer1: (accumulator: TSink, value: TSource1) => TSink,
  source2: Observable<TSource2>,
  reducer2: (accumulator: TSink, value: TSource2) => TSink,
  source3: Observable<TSource3>,
  reducer3: (accumulator: TSink, value: TSource3) => TSink,
  source4: Observable<TSource4>,
  reducer4: (accumulator: TSink, value: TSource4) => TSink,
  initialValue: TSink,
): Observable<TSink>;
export function multiScan<TSource1, TSource2, TSource3, TSource4, TSource5, TSink>(
  source1: Observable<TSource1>,
  reducer1: (accumulator: TSink, value: TSource1) => TSink,
  source2: Observable<TSource2>,
  reducer2: (accumulator: TSink, value: TSource2) => TSink,
  source3: Observable<TSource3>,
  reducer3: (accumulator: TSink, value: TSource3) => TSink,
  source4: Observable<TSource4>,
  reducer4: (accumulator: TSink, value: TSource4) => TSink,
  source5: Observable<TSource5>,
  reducer5: (accumulator: TSink, value: TSource5) => TSink,
  initialValue: TSink,
): Observable<TSink>;
export function multiScan<TSource1, TSource2, TSource3, TSource4, TSource5, TSource6, TSink>(
  source1: Observable<TSource1>,
  reducer1: (accumulator: TSink, value: TSource1) => TSink,
  source2: Observable<TSource2>,
  reducer2: (accumulator: TSink, value: TSource2) => TSink,
  source3: Observable<TSource3>,
  reducer3: (accumulator: TSink, value: TSource3) => TSink,
  source4: Observable<TSource4>,
  reducer4: (accumulator: TSink, value: TSource4) => TSink,
  source5: Observable<TSource5>,
  reducer5: (accumulator: TSink, value: TSource5) => TSink,
  source6: Observable<TSource6>,
  reducer6: (accumulator: TSink, value: TSource6) => TSink,
  initialValue: TSink,
): Observable<TSink>;
export function multiScan<TSource1, TSource2, TSource3, TSource4, TSource5, TSource6, TSource7, TSink>(
  source1: Observable<TSource1>,
  reducer1: (accumulator: TSink, value: TSource1) => TSink,
  source2: Observable<TSource2>,
  reducer2: (accumulator: TSink, value: TSource2) => TSink,
  source3: Observable<TSource3>,
  reducer3: (accumulator: TSink, value: TSource3) => TSink,
  source4: Observable<TSource4>,
  reducer4: (accumulator: TSink, value: TSource4) => TSink,
  source5: Observable<TSource5>,
  reducer5: (accumulator: TSink, value: TSource5) => TSink,
  source6: Observable<TSource6>,
  reducer6: (accumulator: TSink, value: TSource6) => TSink,
  source7: Observable<TSource7>,
  reducer7: (accumulator: TSink, value: TSource7) => TSink,
  initialValue: TSink,
): Observable<TSink>;
export function multiScan<TSource1, TSource2, TSource3, TSource4, TSource5, TSource6, TSource7, TSource8, TSink>(
  source1: Observable<TSource1>,
  reducer1: (accumulator: TSink, value: TSource1) => TSink,
  source2: Observable<TSource2>,
  reducer2: (accumulator: TSink, value: TSource2) => TSink,
  source3: Observable<TSource3>,
  reducer3: (accumulator: TSink, value: TSource3) => TSink,
  source4: Observable<TSource4>,
  reducer4: (accumulator: TSink, value: TSource4) => TSink,
  source5: Observable<TSource5>,
  reducer5: (accumulator: TSink, value: TSource5) => TSink,
  source6: Observable<TSource6>,
  reducer6: (accumulator: TSink, value: TSource6) => TSink,
  source7: Observable<TSource7>,
  reducer7: (accumulator: TSink, value: TSource7) => TSink,
  source8: Observable<TSource8>,
  reducer8: (accumulator: TSink, value: TSource8) => TSink,
  initialValue: TSink,
): Observable<TSink>;
export function multiScan<TSource1, TSource2, TSource3, TSource4, TSource5, TSource6, TSource7, TSource8, TSource9, TSink>(
  source1: Observable<TSource1>,
  reducer1: (accumulator: TSink, value: TSource1) => TSink,
  source2: Observable<TSource2>,
  reducer2: (accumulator: TSink, value: TSource2) => TSink,
  source3: Observable<TSource3>,
  reducer3: (accumulator: TSink, value: TSource3) => TSink,
  source4: Observable<TSource4>,
  reducer4: (accumulator: TSink, value: TSource4) => TSink,
  source5: Observable<TSource5>,
  reducer5: (accumulator: TSink, value: TSource5) => TSink,
  source6: Observable<TSource6>,
  reducer6: (accumulator: TSink, value: TSource6) => TSink,
  source7: Observable<TSource7>,
  reducer7: (accumulator: TSink, value: TSource7) => TSink,
  source8: Observable<TSource8>,
  reducer8: (accumulator: TSink, value: TSource8) => TSink,
  source9: Observable<TSource9>,
  reducer9: (accumulator: TSink, value: TSource9) => TSink,
  initialValue: TSink,
): Observable<TSink>;
export function multiScan<TSource1, TSource2, TSource3, TSource4, TSource5, TSource6, TSource7, TSource8, TSource9, TSource10, TSink>(
  source1: Observable<TSource1>,
  reducer1: (accumulator: TSink, value: TSource1) => TSink,
  source2: Observable<TSource2>,
  reducer2: (accumulator: TSink, value: TSource2) => TSink,
  source3: Observable<TSource3>,
  reducer3: (accumulator: TSink, value: TSource3) => TSink,
  source4: Observable<TSource4>,
  reducer4: (accumulator: TSink, value: TSource4) => TSink,
  source5: Observable<TSource5>,
  reducer5: (accumulator: TSink, value: TSource5) => TSink,
  source6: Observable<TSource6>,
  reducer6: (accumulator: TSink, value: TSource6) => TSink,
  source7: Observable<TSource7>,
  reducer7: (accumulator: TSink, value: TSource7) => TSink,
  source8: Observable<TSource8>,
  reducer8: (accumulator: TSink, value: TSource8) => TSink,
  source9: Observable<TSource9>,
  reducer9: (accumulator: TSink, value: TSource9) => TSink,
  source10: Observable<TSource10>,
  reducer10: (accumulator: TSink, value: TSource10) => TSink,
  initialValue: TSink,
): Observable<TSink>;
export function multiScan<TSink, TSource>(...args: any[]): Observable<TSink> {
  const initialValue: TSink = args.slice(-1)[0];
  args = args.slice(0, -1);
  const sources: ReadonlyArray<Observable<[TSource, number]>> = args
    .filter((_, argumentIndex) => argumentIndex % 2 === 0)
    .map((source: Observable<TSource>, sourceIndex): Observable<[TSource, number]> =>
      source.pipe(map((value: TSource): [TSource, number] =>
        [value, sourceIndex])));
  const reducers: ReadonlyArray<(TSink, TSource) => TSink> =
    args.filter((_, argumentIndex) => argumentIndex % 2 === 1);

  return merge(...sources).pipe(
    scan(
      (accumulator: TSink, [value, reducerIndex]: [TSource, number]): TSink =>
        reducers[reducerIndex](accumulator, value),
      initialValue),
  );
}
