import { Equal, Expect } from "../../utils"

namespace iamkanguk_permutation {
  export type Permutation<T, K = T> = 
    [T] extends [never]
      ? []
      : K extends K
        ? [K, ...Permutation<Exclude<T, K>>]
        : never;
}

namespace TestCase {
  type TC1 = Expect<Equal<iamkanguk_permutation.Permutation<'A'>, ['A']>>;
  type TC2 = Expect<Equal<iamkanguk_permutation.Permutation<'A' | 'B' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>;
  type TC3 = Expect<Equal<iamkanguk_permutation.Permutation<'B' | 'A' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>;
  type TC4 = Expect<Equal<iamkanguk_permutation.Permutation<boolean>, [false, true] | [true, false]>>;
  type TC5 = Expect<Equal<iamkanguk_permutation.Permutation<never>, []>>;
}