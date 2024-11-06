import { Equal, Expect } from "../../utils"

namespace iamkanguk_indexof {
    /**
     * [1, 2, 3], 2
     * -> F: 1 / L: [2, 3] / K: [1]
     * -> 
     * -> 2 / [3] / YES
     * 
     * =======================================
     * 
     * [any, 1], 1
     * -> F: any / L: [1] / K: [any]
     * -> F: 1 / L: NOPE / RESULT = 1
     */
    export type IndexOf<T extends unknown[], U, K extends unknown[] = []> =
        T extends [infer F, ...infer L]
            ? Equal<F, U> extends true
                ? K['length']
                : IndexOf<L, U, [...K, F]>
            : -1
}

namespace TestCase {
    type TC1 = Expect<Equal<iamkanguk_indexof.IndexOf<[1, 2, 3], 2>, 1>>;
    type TC2 = Expect<Equal<iamkanguk_indexof.IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>;
    type TC3 = Expect<Equal<iamkanguk_indexof.IndexOf<[0, 0, 0], 2>, -1>>;
    type TC4 = Expect<Equal<iamkanguk_indexof.IndexOf<[string, 1, number, 'a'], number>, 2>>;
    type TC5 = Expect<Equal<iamkanguk_indexof.IndexOf<[string, 1, number, 'a', any], any>, 4>>;
    type TC6 = Expect<Equal<iamkanguk_indexof.IndexOf<[string, 'a'], 'a'>, 1>>;
    type TC7 = Expect<Equal<iamkanguk_indexof.IndexOf<[any, 1], 1>, 1>>;
}

