const { default: Axios } = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1/num2,
    isNull: () => null,
    checkValue: (c) => c,
    createUser: () => {
        const user = {firstname: "Brad"} 
        user['lastname'] = "Leone"
        return user
    },
    fetchUser: () => Axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.data)
        .catch(err => error)
}

module.exports = functions;