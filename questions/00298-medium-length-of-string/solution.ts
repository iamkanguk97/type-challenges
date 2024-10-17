type _LengthOfString<S extends string, R extends string[] = []> =
    S extends `${infer A}${infer B}` ? _LengthOfString<B, [...R, A]> : R['length'];

type TT1 = _LengthOfString<"">;   // 0
type TT2 = _LengthOfString<"iamkanguk">;   // 9
type TT3 = _LengthOfString<"reina">;   // 5
type TT4 = _LengthOfString<"Sound! Euphonium">;   // 16

