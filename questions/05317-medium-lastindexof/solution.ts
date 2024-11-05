import { Equal, Expect } from "../../utils"

namespace iamkanguk_lastIndexOf {
    export type LastIndexOf<T extends unknown[], U> = T extends [...infer F, infer L] ? Equal<U, L> extends true ? F['length'] : LastIndexOf<F, U> : -1;
}

namespace TestCase {
    type TC1 = Expect<Equal<iamkanguk_lastIndexOf.LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>;
    type TC2 = Expect<Equal<iamkanguk_lastIndexOf.LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>;
    type TC3 = Expect<Equal<iamkanguk_lastIndexOf.LastIndexOf<[0, 0, 0], 2>, -1>>;
    type TC4 = Expect<Equal<iamkanguk_lastIndexOf.LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>;
    type TC5 = Expect<Equal<iamkanguk_lastIndexOf.LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>;
}

