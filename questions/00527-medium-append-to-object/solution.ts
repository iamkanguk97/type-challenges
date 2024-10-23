namespace iamkanguk_append_to_object {
    type AppendToObject<T extends Record<PropertyKey, unknown>, U extends PropertyKey, V extends unknown> = {
        [key in keyof T | U]: key extends keyof T ? T[key] : V
    };

    /** Test Cases */
    type test1 = {
        key: 'cat'
        value: 'green'
    }
      
    type testExpect1 = {
    key: 'cat'
    value: 'green'
    home: boolean
    }
    
    type test2 = {
    key: 'dog' | undefined
    value: 'white'
    sun: true
    }
    
    type testExpect2 = {
    key: 'dog' | undefined
    value: 'white'
    sun: true
    home: 1
    }
    
    type test3 = {
    key: 'cow'
    value: 'yellow'
    sun: false
    }
    
    type testExpect3 = {
    key: 'cow'
    value: 'yellow'
    sun: false
    moon: false | undefined
    }

    type TC1 = AppendToObject<test1, 'home', boolean>;   // testExpect1
    type TC2 = AppendToObject<test2, 'home', 1>;   // testExpect2
    type TC3 = AppendToObject<test3, 'home', false | undefined>;   // testExpect3
}