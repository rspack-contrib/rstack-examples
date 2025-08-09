export const NULL = null; // null can be inlined
export const UNDEFINED = undefined; // undefined can be inlined
export const isMobile = ENV === 'mobile'; // boolean can be inlined
export const shortString = 'hhh'; // lenght <= 6 string can be inlined
export const longString = 'string len greater than 6'; // lenght > 6 string can't be inlined
export const shortNumber = 1.2345; // length <= 6 number can be inlined
export const longNumber = 1.23456; // length > 6 number can't be inlined
const a = 1 << 0;
const b = 1 << 1;
const c = 1 << 2;
export const all = a | b | c; // since 'a', 'b', 'c' are all constants, so 'all' can also be inlined
