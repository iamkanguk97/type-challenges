namespace iamkanguk_replace {
    export type Replace<S extends string, From extends string, To extends string> = |
        From extends ''
            ? S
            : S extends `${infer F}${From}${infer L}`
                ? `${F}${To}${L}`
                : S;
}

namespace TestCase {
    type TC1 = iamkanguk_replace.Replace<'foobar', 'bar', 'foo'>;   // foofoo
    type TC2 = iamkanguk_replace.Replace<'foobar', 'foo', 'bar'>;   // barbar
    type TC3 = iamkanguk_replace.Replace<'foobar', 'baz', 'foo'>;   // foobar
}