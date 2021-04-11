let bool=false
console.log (typeof bool)
bool=String(bool)
console.log (typeof bool)

let str='464'
let num=Number(20+20+'1')
console.log (num)

let bl=Boolean(1)
console.log (bl)

console.log(2>3)
console.log(2==2)
console.log(2!=2)
console.log(null==undefined)
console.log(null===undefined)

let bool1=!false
console.log (bool1)

let answer=prompt('сколько тебе лет?','')
console.log (answer)
if(answer<18 || answer>40){ 
    console.log('школьник!!!')
} else{
    console.log('old')
}

let login="katya@gmail.com"
let password="qwerty123"
let loginInput=prompt('Ваш логин')
let passwordInput=prompt('Ваш пароль')
if(loginInput===login && passwordInput===password){
    console.log('Успешно')
} else{
    console.log('Вы ввели неправильный пароль')  
}


let arr=[1, 4, 9]
if(arr[0]>4) console.log(true)
if(arr[1]>4) console.log(true)
if(arr[2]>4) console.log(true)

let arr1=[true, false, 'ok', 'good', 'more']
for(let i=0; i<arr1.length; i++){
    console.log(arr1[i])
}
// for (let i=10; i<101; i++){
//     console.log(i)
//     for (let g=10; g<101; i++){
//     console.log(g)
//     }
// }

let i=10
while(i<270){
    if(i % 10 == 0) console.log(i)
    i++  
}

