namespace iamkanguk_string_to_union {
  type StringToUnion<T extends string, U extends string[] = []> = 
    T extends `${infer First}${infer Rest}`
      ? StringToUnion<Rest, [...U, First]>
      : U['length'] extends 0
        ? never
        : U[number];


  type TC1 = StringToUnion<''>;   // never
  type TC2 = StringToUnion<'t'>;   // 't'
  type TC3 = StringToUnion<'hello'>;   // 'h' | 'e' | 'l' | 'l' | 'o'
}