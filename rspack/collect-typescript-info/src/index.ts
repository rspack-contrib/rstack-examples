import { Kind, TypeA, TypeB } from './reexports';

const a: TypeA = 42;
const b: TypeB = 'rspack';

console.log(Kind.A, Kind.B, a, b);
