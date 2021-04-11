//1
let week={
    one: 'Monday',
    two: 'Tuesday',
    three: 'Wednesday',
    four: 'Thursday',
    five: 'Friday',
    six: 'Saturday',
    seven: 'Sunday'
}
console.log(week.six)

//2 ?????
let arr = {
    key: 'value',
    key: 'value'
}

let keys = Object.entries(arr) 
console.log(keys)

//3
let user={
    name: 'Katja',
    isAdmin: true,
    age: 21
}
let isPlainObject = (c) => {
    return c === Object(c)
}
console.log(isPlainObject(user))

//4
let auto={
    name: 'Audi',
    isEngine: true,
    year: 2010
}

let newObj = Object.create (auto, {})

//5
let objCompare = (d, g) => {
    return d === g
}
console.log (objCompare(user, auto))

//6
let user2 = {
    name: 'Lesha',
    age: 26,
    year: 1994
}

let objProperties = (a1, a2) => {
    return Object.keys(a1).filter(function(itm){
        return itm in a2
    })
}
console.log(objProperties(user, user2))