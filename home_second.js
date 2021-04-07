// 1
console.log(true+false) //1+0
console.log(12/'6') //числовое
console.log('number'+15+3) //
console.log(5+3+'number')
console.log([1]>null)
console.log("foo" + + "bar")
console.log('true' == true)
console.log(false == 'false')
console.log(null == '')
console.log(!!"false" == !!"true")
console.log(['x'] == 'x')
console.log([] + null + 1)
console.log(0 || "0" && {})
console.log([1,2,3] == [1,2,3])

// 2

let i=3
while (i) {
    alert( i-- );
}
console.log(i)  

// 3
let a=40
while (a<91) {
    a++
    console.log(a)
}

// 4
let b=11
while(b<340){
    if(b % 4 == 0) console.log(b)
    b++  
}

// 5

for (let c=100; c>=-5; c--){
    console.log(c)
}

// 6
let arr=[1, 6, 8, 14, 0, 4]
for (let d=0; d < arr.length;  d++) {
    if (arr[d]>3 && arr[d]<10)
    document.write(arr[d]+'<br>');
    
}

// 7
let str = "-";
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr1.length; i++) {
    { str = str + arr1[i] + "-" }

}
console.log(str);

// 8  
const arr2 = [' Monday', ' Tues', ' Wens', ' Thur', ' Frid', ' Satu', ' Sund']
for( let g = 0; g < arr2.length; g++){
    if (g == 5 || g == 6) {
        document.write('')
        document.write('')
        document.write(arr2[g].bold())
        document.write('')
        document.write('')
        document.write('')
    } else {
        document.write(arr2[g])
        document.write('')
    }
}


// 9
let day = new Date()
let number_day = day.getDay()
document.write(number_day)
const arrDays = [' Воскресенье', ' Понедельник', ' Вторник', ' Среда', ' Четверг', ' Пятница', ' Суббота', ' Воскресенье']
for(let x = 0; x < arrDays.length; x++){
    if(x == number_day){
        document.write('')
        document.write('')
        document.write(arrDays[x].italics())
        document.write('')
        document.write('')
        document.write('')
    } else {
        document.write(arrDays[x])
        document.write('')
    }
}
//10

let iter = 0;
for (let i = 1000; i >= 50; i = i / 2) {
    console.log(i);
    iter++
};
console.log(iter)