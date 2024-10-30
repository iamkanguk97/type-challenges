import { Equal, Expect } from "../../utils"

namespace iamkanguk_append_arguments {
    export type AppendArgument1<Fn, A> = Fn extends (...args: infer P) => infer R ? (...args: [...P, A]) => R : never;
    export type AppendArgument2<Fn extends (...args: any) => any, A> = (...args: [...Parameters<Fn>, x: A]) => ReturnType<Fn>;
}

namespace TestCase {
    type Case1 = iamkanguk_append_arguments.AppendArgument1<(a: number, b: string) => number, boolean>;
    type Result1 = (a: number, b: string, x: boolean) => number;

    type Case2 = iamkanguk_append_arguments.AppendArgument1<() => void, undefined>;
    type Result2 = (x: undefined) => void;

    type Case3 = iamkanguk_append_arguments.AppendArgument2<(a: number, b: string) => number, boolean>;
    type Result3 = (a: number, b: string, x: boolean) => number;

    type Case4 = iamkanguk_append_arguments.AppendArgument2<() => void, undefined>;
    type Result4 = (x: undefined) => void;

    type TC1 = Expect<Equal<Case1, Result1>>;
    type TC2 = Expect<Equal<Case2, Result2>>;
    type TC3 = Expect<Equal<Case3, Result3>>;
    type TC4 = Expect<Equal<Case4, Result4>>;
}

