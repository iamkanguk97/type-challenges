declare namespace iamkanguk_flatten {
    type Flatten<T extends unknown[]> = T extends [infer First, ...infer Rest]
        ? First extends unknown[]
            ? [...Flatten<First>, ...Flatten<Rest>]
            : [First, ...Flatten<Rest>]
        : [];

    type TC1 = Flatten<[]>;
    type TC2 = Flatten<[1, 2, 3, 4]>;
    type TC3 = Flatten<[1, [2]]>;
    type TC4 = Flatten<[1, 2, [3, 4], [[[5]]]]>;
}