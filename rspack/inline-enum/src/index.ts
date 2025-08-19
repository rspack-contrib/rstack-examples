import { Kind } from './enums';

// Take a look at the build output (dist/main.js)
// Should inline Kind.A to 0 and Kind.B to 1 here since inlineEnum is configured.
console.log(Kind.A, Kind.B);
