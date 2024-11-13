import { Equal, Expect } from "../../utils"

namespace iamkanguk_pick_by_type {
    export type PickByType<T, U> = {
        [K in keyof T as T[K] extends U ? K: never]: T[K]
    };
}

namespace TestCase {
    interface IModel {
        name: string;
        count: number;
        isReadonly: boolean;
        isEnable: boolean;
    }

    type TC1 = Expect<Equal<iamkanguk_pick_by_type.PickByType<IModel, boolean>, { isReadonly: boolean, isEnable: boolean }>>;
    type TC2 = Expect<Equal<iamkanguk_pick_by_type.PickByType<IModel, string>, { name: string }>>;
    type TC3 = Expect<Equal<iamkanguk_pick_by_type.PickByType<IModel, number>, { count: number }>>;
}

