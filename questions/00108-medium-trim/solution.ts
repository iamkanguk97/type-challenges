type Space = ' ' | `\n` | '\t';
type _Trim<S extends string> = S extends `${Space}${infer R}` | `${infer R}${Space}` ? _Trim<R> : S;

type T1 = _Trim<'  Hello World'>;   // "Hello World"
type T2 = _Trim<'\nHello World'>;   // "Hello World"
type T3 = _Trim<'Hello World  '>;   // "Hello World"
type T4 = _Trim<'  Hello World  '>;   // "Hello World"