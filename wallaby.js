const compilerOptions = Object.assign(
  {},
  require('./tsconfig.json').compilerOptions,
  require('./tsconfig.spec.json').compilerOptions,
  { module: 'CommonJs' });

module.exports = function (wallaby) {
  return {
    compilers: {
      '**/*.ts': wallaby.compilers.typeScript(compilerOptions)
    },
    debug: true,
    env: {
      kind: 'chrome',
    },
    files: [
      { pattern: 'src/lib/**/*.+(ts|json)', load: false },
      { pattern: 'src/lib/**/*.d.ts', ignore: true },
      { pattern: 'src/lib/**/*spec.ts', ignore: true },
    ],
    testFramework: 'jasmine',
    tests: [
      'src/lib/**/*spec.ts',
    ],
  };
};
