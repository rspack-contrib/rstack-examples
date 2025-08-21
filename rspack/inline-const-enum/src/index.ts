import { Kind, ConstKind } from './enums';

// Take a look at the build output (dist/main.js)
// Should not inline Kind.A and Kind.B here since inlineEnum is configured to 'const-only'.
console.log(Kind.A, Kind.B);
// Should inline ConstKind.A to 0 and ConstKind.B to 1 here since inlineEnum is configured to 'const-only'.
console.log(ConstKind.A, ConstKind.B);
