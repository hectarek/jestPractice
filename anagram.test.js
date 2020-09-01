const isAnagram = require('./anagram');

test("checks to see if function exists", () => {
    expect(typeof isAnagram).toEqual('function');
});

test("checks to see if anagram function works", () => {
    expect(isAnagram("cinema", 'iceman')).toBeTruthy();
})

test("checks to see if anagram function works with special characters", () => {
    expect(isAnagram("Dormitory", 'dirty room##')).toBeTruthy();
})

test("checks to see if anagram function works properly", () => {
    expect(isAnagram("hello", 'aloha')).toBeFalsy();
})