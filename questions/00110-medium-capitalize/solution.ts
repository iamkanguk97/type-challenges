type _MyCapitalize<S extends string> = S extends `${infer A}${infer B}` ? `${Uppercase<A>}${B}` : S;

type T1 = _MyCapitalize<'foobar'>;   // Foobar
type T2 = _MyCapitalize<'foo bar'>;   // Foo bar
type T3 = _MyCapitalize<'a'>;   // A