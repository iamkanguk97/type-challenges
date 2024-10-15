type Space = ' ' | '\n' | '\t';
type _TrimRight<S extends string> = S extends `${infer R}${Space}` ? _TrimRight<R> : S;