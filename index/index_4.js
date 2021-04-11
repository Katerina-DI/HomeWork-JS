let str="aaa@bbb@ccc"
str=str.replace('@', "!")
console.log(str)

let str1="aaa bbb ccc"
console.log(str1.slice(4, 7))
console.log(str1.substr(3, 4))
console.log(str1.substring(4, 7))

let str2='js'
console.log(str2.toUpperCase())
console.log(str2.toLowerCase())

let str3='123456'
console.log(str3.split('').reverse().join(''))


let str4='index.html'
let strHtml=(a)=>{
    return a.substr(-5)=='.html'
}
b=strHtml(str4)
console.log(b)

//function 


let numb=5


let numbCube = c => c*c*c

let result = numbCube(numb)

console.log(result)

let num=6

let isEven = d => d % 2 == 0

console.log(isEven(num))


//Object

let user={
    name: 'Katja',
    isAdmin: true,
    age: 21
}
delete user.isAdmin
console.log('age' in user)

for (key in user){
    console.log(user [key])
}

let auto={
    name: 'Audi',
    isEngine: true,
    year: 2010
}
delete auto.isEngine
auto.year=2013
auto.models='A'
console.log(auto)

