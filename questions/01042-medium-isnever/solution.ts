import { Equal, Expect } from '../../utils/index';

namespace iamkanguk_is_never {
    type IsNever<T> = [T] extends [never] ? true : false;

    type TC1 = Expect<Equal<IsNever<never>, true>>;   // true
    type TC2 = Expect<Equal<IsNever<never | string>, false>>;  // false
    type TC3 = Expect<Equal<IsNever<''>, false>>;   // false
    type TC4 = Expect<Equal<IsNever<null>, false>>;   // false
    type TC5 = Expect<Equal<IsNever<undefined>, false>>;   // false
}

namespace TestCase {
    function assertNever<T>(value: T extends never ? true : false) {}

    assertNever<string>(true);   // false
    assertNever<never>(true);

    // T extends never는 T가 never일때 동작하지 않는다.
    // TypeScript에서는 never를 빈 Union 타입으로 다룬다.
    // 그래서 결국에 우리는 [T] 또는 T[]와 같은 기법을 사용해서 처리해야 한다.
    // https://github.com/type-challenges/type-challenges/issues/614

    function assertNeverArray<T>(value: T[] extends never[] ? true : false) {}
    function assertNeverTuple<T>(value: [T] extends [never] ? true : false) {}
    
    // both of these fail, as expected
    assertNeverArray<string>(true)
    assertNeverTuple<string>(true)
    
    // both of these pass, as expected
    assertNeverArray<never>(true)
    assertNeverTuple<never>(true)
}