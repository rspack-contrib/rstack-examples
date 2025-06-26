import { Kind, TypeA, TypeB } from './reexports';

const a: TypeA = 42;
const b: TypeB = 'rspack';

console.log(a, b);

// Take a look at the build output (dist/main.js)
// Should inline Kind.A to 0 and Kind.B to 1 here since we configured inlineEnum
console.log(Kind.A, Kind.B);
