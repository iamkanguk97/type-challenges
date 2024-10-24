namespace EqualType {
    export type Equal1<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
    
    type Expression<X> = <T>() => T extends X ? 1 : 2;
    export type Equal2<X, Y> = Expression<X> extends Expression<Y> ? true : false;
}

namespace TestCase {
    export type Foo = {
        a: number
        b: string
    }

    export type Bar = {
        b: number
        c: boolean
    }

    export type Expected = {
        a: number
        b: number
        c: boolean
    }
}

namespace MergeSolutionWithEqual1 {
    type Merge1<F extends Record<PropertyKey, unknown>, S extends Record<PropertyKey, unknown>> = {
        [key in keyof F | keyof S]: key extends keyof S ? S[key] : key extends keyof F ? F[key] : never 
    };

    type TC1 = EqualType.Equal1<Merge1<TestCase.Foo, TestCase.Bar>, TestCase.Expected>;   // true
}

namespace MergeSolutionWithEqual2 {
    type Merge2<F extends Record<PropertyKey, unknown>, S extends Record<PropertyKey, unknown>> = Omit<F, keyof S> & S;
    
    type TC1 = EqualType.Equal2<Merge2<TestCase.Foo, TestCase.Bar>, TestCase.Expected>;   // true
}

