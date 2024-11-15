import { Equal, Expect } from "../../utils"

// a bc || a b
// b c || b
// c never || never

// a bc || a bc
// b c || b c
// c never || c never

namespace iamkanguk_starts_with {
    /** 내 정답 */
    export type StartsWith<T extends string, U extends string> =
        T extends `${infer F}${infer L}`
            ? U extends `${infer UF}${infer UL}`
                ? Equal<F, UF> extends true
                    ? StartsWith<L, UL>
                    : false
                : true
            : U extends ''
                ? true
                : false

    /** 간단정답 */
    export type _StartsWith<T extends string, U extends string> = T extends `${U}${infer _}` ? true : false;
}

namespace TestCase {
  type TC1 = Expect<Equal<iamkanguk_starts_with._StartsWith<'abc', 'ac'>, false>>;
  type TC2 = Expect<Equal<iamkanguk_starts_with._StartsWith<'abc', 'ab'>, true>>;
  type TC3 = Expect<Equal<iamkanguk_starts_with._StartsWith<'abc', 'abc'>, true>>;
  type TC4 = Expect<Equal<iamkanguk_starts_with._StartsWith<'abc', 'abcd'>, false>>;
  type TC5 = Expect<Equal<iamkanguk_starts_with._StartsWith<'abc', ''>, true>>;
  type TC6 = Expect<Equal<iamkanguk_starts_with._StartsWith<'abc', ' '>, false>>;
  type TC7 = Expect<Equal<iamkanguk_starts_with._StartsWith<'', ''>, true>>;

  type TTC1 = Expect<Equal<iamkanguk_starts_with.StartsWith<'abc', 'ac'>, false>>;
  type TTC2 = Expect<Equal<iamkanguk_starts_with.StartsWith<'abc', 'ab'>, true>>;
  type TTC3 = Expect<Equal<iamkanguk_starts_with.StartsWith<'abc', 'abc'>, true>>;
  type TTC4 = Expect<Equal<iamkanguk_starts_with.StartsWith<'abc', 'abcd'>, false>>;
  type TTC5 = Expect<Equal<iamkanguk_starts_with.StartsWith<'abc', ''>, true>>;
  type TTC6 = Expect<Equal<iamkanguk_starts_with.StartsWith<'abc', ' '>, false>>;
  type TTC7 = Expect<Equal<iamkanguk_starts_with.StartsWith<'', ''>, true>>;
}