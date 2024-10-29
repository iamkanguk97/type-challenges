import { Equal, Expect } from "../../utils"

namespace iamkanguk_replace_all {
    // foobarfoobar -> F: fo / From: ob / L: arfoobar -> fob
    // arfoobar -> F: arfo / From: ob / L: ar -> fobarfob
    // ar -> F: ar

    export type ReplaceAll<S extends string, From extends string, To extends string, T extends string = ''> = |
        From extends ''
            ? S
            : S extends `${infer F}${From}${infer L}`
                ? ReplaceAll<L, From, To, `${T}${F}${To}`>
                : `${T}${S}`
        
}

namespace TestCase {
  type TC1 = Expect<Equal<iamkanguk_replace_all.ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>;
  type TC2 = Expect<Equal<iamkanguk_replace_all.ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>;
  type TC3 = Expect<Equal<iamkanguk_replace_all.ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>;
  type TC4 = Expect<Equal<iamkanguk_replace_all.ReplaceAll<'t y p e s', ' ', ''>, 'types'>>;
  type TC5 = Expect<Equal<iamkanguk_replace_all.ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>;
  type TC6 = Expect<Equal<iamkanguk_replace_all.ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>;
  type TC7 = Expect<Equal<iamkanguk_replace_all.ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>;
  type TC8 = Expect<Equal<iamkanguk_replace_all.ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>;
  type TC9 = Expect<Equal<iamkanguk_replace_all.ReplaceAll<'', '', ''>, ''>>;
}