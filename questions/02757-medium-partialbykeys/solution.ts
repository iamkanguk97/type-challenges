import { Equal, Expect } from "../../utils"

namespace iamkanguk_partial_by_keys {
    type Wrapper<T> = {
        [key in keyof T]: T[key]
    };

    export type PartialByKeys<T, K extends keyof T = keyof T> = Wrapper<{
        [key in keyof T as key extends K ? key : never]?: T[key]
    } & Omit<T, K>>;
}

namespace TestCase {
    interface User {
        name: string
        age: number
        address: string
    }

    interface UserPartialName {
        name?: string
        age: number
        address: string
    }

    interface UserPartialNameAndAge {
        name?: string
        age?: number
        address: string
    }

    type TC1 = Expect<Equal<iamkanguk_partial_by_keys.PartialByKeys<User, 'name'>, UserPartialName>>;
    type TC2 = Expect<Equal<iamkanguk_partial_by_keys.PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>;
    type TC3 = Expect<Equal<iamkanguk_partial_by_keys.PartialByKeys<User>, Partial<User>>>;
    // @ts-expect-error
    type TC4 = Expect<Equal<iamkanguk_partial_by_keys.PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>;
}

