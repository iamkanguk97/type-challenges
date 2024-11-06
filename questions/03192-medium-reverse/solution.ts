import { Equal, Expect } from "../../utils"

namespace iamkanguk_reverse {
    // export type Reverse<T extends unknown[], R extends unknown[] = []> = T extends [...infer F, infer L] ? Reverse<F, [...R, L]> : R;
    export type Reverse<T extends unknown[]> = T extends [infer F, ...infer L] ? [...Reverse<L>, F] : T;
}

namespace TestCase {
    type TC1 = Expect<Equal<iamkanguk_reverse.Reverse<[]>, []>>;
    type TC2 = Expect<Equal<iamkanguk_reverse.Reverse<['a', 'b']>, ['b', 'a']>>;
    type TC3 = Expect<Equal<iamkanguk_reverse.Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>;
}

