type Space = ' ' | '\n' | '\t';   // 문제에서 다루는 공백처리 문자
type _TrimLeft<S extends string> = S extends `${Space}${infer R}` ? _TrimLeft<R> : S;

type T1 = _TrimLeft<'  Hello World'>;   // "Hello World"
type T2 = _TrimLeft<'\nHello '>;   // "Hello "
