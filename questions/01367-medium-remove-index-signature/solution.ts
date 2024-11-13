import { Equal, Expect } from "../../utils"

export namespace iamkanguk_remove_index_signature {
    export type RemoveIndexSignature<T, P = PropertyKey> = {
        [key in keyof T as P extends key ? never : key extends P ? key : never]: T[key]
    }

    export type _RemoveIndexSignature<T> = {
        [key in keyof T as string extends key ? never : number extends key ? never : symbol extends key ? never : key]: T[key]
    }
}

namespace TestCase {
    type Foo = {
        [key: string]: any;
        foo(): void;
    }

    type Bar = {
        [key: number]: any;
        bar(): void;
        0: string;
    }

    const foobar = Symbol('foobar');
    type FooBar = {
        [key: symbol]: any;
        [foobar](): void;
    }

    type Baz = {
        bar(): void;
        baz: string;
    }

    type TC1 = Expect<Equal<iamkanguk_remove_index_signature._RemoveIndexSignature<Foo>, { foo(): void }>>;
    type TC2 = Expect<Equal<iamkanguk_remove_index_signature._RemoveIndexSignature<Bar>, { bar(): void, 0: string }>>;
    type TC3 = Expect<Equal<iamkanguk_remove_index_signature._RemoveIndexSignature<FooBar>, { [foobar](): void }>>;
    type TC4 = Expect<Equal<iamkanguk_remove_index_signature._RemoveIndexSignature<Baz>, { bar(): void, baz: string }>>;
}

