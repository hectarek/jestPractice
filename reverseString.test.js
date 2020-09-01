const reverseString = require('./reverseString');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
})

test("String string reverses", () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test("String string reverses with uppercase", () => {
    expect(reverseString('Hello')).toEqual('olleh');
});
