let user = { username: 'Sara', password: 'zebra'}

console.log(user.username)
console.log(user['username'])

console.log(user.password)
console.log(user['password'])

let whatProperty = 'password'
console.log(user[whatProperty])

let usernamePropeety = 'username'
console.log(user[usernamePropeety])

user.password = 'elephant'
console.log(user)

user['password'] = 'alligator'
console.log(user)

user.email = 'sataa@gmail.com'
console.log(user)
console.log(user.email)

