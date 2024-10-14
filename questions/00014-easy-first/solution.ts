/**
 * solution namespace
 */
namespace iamkanguk {
    type MyAwaited<T> = T extends PromiseLike<infer R> ? MyAwaited<R> : T;
    declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{ [key in keyof T]: MyAwaited<T[key]> }>;
}