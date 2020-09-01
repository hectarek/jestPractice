const functions = require('./functions');

// Basic tests

test("Add 2 + 2 to equal 4", () => {
    expect(functions.add(2,2)).toBe(4);
});

test("Add 3 - 2 to equal 1", () => {
    expect(functions.subtract(3,2)).toBe(1);
});

test("Add 4 * 2 to equal 8", () => {
    expect(functions.multiply(4,2)).toBe(8);
});

test("Add 10 / 2 to equal 5", () => {
    expect(functions.divide(10,2)).toBe(5);
});

// Not

test("Add 2 + 2 to NOT equal 5", () => {
    expect(functions.add(2,2)).not.toBe(5);
});

// Jest can also test for Truthy & Falsey Values 
// tobeBull matches only null
// tobeUndefined matches only undefined
// tobeDefined is the opposite of undefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// Falsy values - undefined, null, 0, '', NaN

test("Should be null", () => {
    expect(functions.isNull()).toBeNull();
});

test("Should be Falsy", () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

test("Should be Truthy", () => {
    expect(functions.checkValue(3)).toBeTruthy();
});

// toBe is used when you are testing for primitive values. 
// If you want to test for a same reference, you need to use toEqual

test("User should be Brad Leone Object", () => {
    expect(functions.createUser()).toEqual({firstname: 'Brad', lastname: "Leone"});
});

// You have other matchers like less than or greater than.

test("Should be under 9000", () => {
    const load1 = 4800;
    const load2 = 3600;
    expect(load1 + load2).toBeLessThan(9000);
})

// You can also use toBeLessThan
// toBeLessThanOrEqual, toBeGreaterThan, toBeGreaterThanOrEqual

// Regex 

test("There is no I in team", () => {
    expect("team").not.toMatch(/I/i);
})

// Arrays 
// user the toContain to check if there is a specific value in the array

test("Admin should be in usernames", () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})

// Testing with async data

// It is required to have both the .assertions and the return in order to check for the exact name
//   if you don't include those, then it will return true if anything comes back. 

// Promise
test("User fetch name should be Leanne Graham", () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        });
})

// Async Await
test("User async await name should be Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham');
})