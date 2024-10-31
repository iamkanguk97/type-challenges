import { Equal, Expect } from '../../utils'

namespace iamkanguk_absolute_first_answer {
    export type Temp<T extends bigint> = `${T}` extends `${infer A}${infer B}`
        ? A extends '-'
            ? B
            : `${T}`
        : `${T}`;

    export type Absolute<T extends number | string | bigint> = |
        T extends number
            ? `${T}` extends `${infer A}${infer B}`
                ? A extends '-'
                    ? B
                    : `${T}`
                : `${T}`
            : T extends string
                ? T extends `${infer A}${infer B}`
                    ? A extends '-'
                        ? B
                        : T
                    : T
                : T extends bigint
                    ? Temp<T>
                    : never;
}

namespace iamkanguk_absolute_real_answer {
    export type Absolute<T extends number | string | bigint> = |
        `${T}` extends `${infer A}${infer B}`
            ? A extends '-'
                ? B
                : `${T}`
            : T;

    /** Real Answer */
    export type RealAbsolute<T extends number | string | bigint> = |
        `${T}` extends `-${infer A}`
            ? A
            : `${T}`;
}

namespace TestCase1 {
    type TC1 = Expect<Equal<iamkanguk_absolute_first_answer.Absolute<0>, '0'>>;
    type TC2 = Expect<Equal<iamkanguk_absolute_first_answer.Absolute<-0>, '0'>>;
    type TC3 = Expect<Equal<iamkanguk_absolute_first_answer.Absolute<10>, '10'>>;
    type TC4 = Expect<Equal<iamkanguk_absolute_first_answer.Absolute<-5>, '5'>>;
    type TC5 = Expect<Equal<iamkanguk_absolute_first_answer.Absolute<'0'>, '0'>>;
    type TC6 = Expect<Equal<iamkanguk_absolute_first_answer.Absolute<'-0'>, '0'>>;
    type TC7 = Expect<Equal<iamkanguk_absolute_first_answer.Absolute<'10'>, '10'>>;
    type TC8 = Expect<Equal<iamkanguk_absolute_first_answer.Absolute<'-5'>, '5'>>;
    type TC9 = Expect<Equal<iamkanguk_absolute_first_answer.Absolute<-1_000_000n>, '1000000'>>;
    type TC10 = Expect<Equal<iamkanguk_absolute_first_answer.Absolute<9_999n>, '9999'>>;
}

namespace TestCase2 {
    type TC1 = Expect<Equal<iamkanguk_absolute_real_answer.Absolute<0>, '0'>>;
    type TC2 = Expect<Equal<iamkanguk_absolute_real_answer.Absolute<-0>, '0'>>;
    type TC3 = Expect<Equal<iamkanguk_absolute_real_answer.Absolute<10>, '10'>>;
    type TC4 = Expect<Equal<iamkanguk_absolute_real_answer.Absolute<-5>, '5'>>;
    type TC5 = Expect<Equal<iamkanguk_absolute_real_answer.Absolute<'0'>, '0'>>;
    type TC6 = Expect<Equal<iamkanguk_absolute_real_answer.Absolute<'-0'>, '0'>>;
    type TC7 = Expect<Equal<iamkanguk_absolute_real_answer.Absolute<'10'>, '10'>>;
    type TC8 = Expect<Equal<iamkanguk_absolute_real_answer.Absolute<'-5'>, '5'>>;
    type TC9 = Expect<Equal<iamkanguk_absolute_real_answer.Absolute<-1_000_000n>, '1000000'>>;
    type TC10 = Expect<Equal<iamkanguk_absolute_real_answer.Absolute<9_999n>, '9999'>>;

    type TC11 = Expect<Equal<iamkanguk_absolute_real_answer.RealAbsolute<0>, '0'>>;
    type TC12 = Expect<Equal<iamkanguk_absolute_real_answer.RealAbsolute<-0>, '0'>>;
    type TC13 = Expect<Equal<iamkanguk_absolute_real_answer.RealAbsolute<10>, '10'>>;
    type TC14 = Expect<Equal<iamkanguk_absolute_real_answer.RealAbsolute<-5>, '5'>>;
    type TC15 = Expect<Equal<iamkanguk_absolute_real_answer.RealAbsolute<'0'>, '0'>>;
    type TC16 = Expect<Equal<iamkanguk_absolute_real_answer.RealAbsolute<'-0'>, '0'>>;
    type TC17 = Expect<Equal<iamkanguk_absolute_real_answer.RealAbsolute<'10'>, '10'>>;
    type TC18 = Expect<Equal<iamkanguk_absolute_real_answer.RealAbsolute<'-5'>, '5'>>;
    type TC19 = Expect<Equal<iamkanguk_absolute_real_answer.RealAbsolute<-1_000_000n>, '1000000'>>;
    type TC20 = Expect<Equal<iamkanguk_absolute_real_answer.RealAbsolute<9_999n>, '9999'>>;
}
