let arrPhoneNum=[8322087, 4978211, 7574197]
for(let i=0; i<arrPhoneNum.length; i++){
    switch (arrPhoneNum[i]){
        case 8322087:
            console.log('номер жени')
            break;
        case 4978211:
            console.log('номер вики')
            break;
        default:
            console.log('номер не найден')
    }
}
let arr= [1, 2, 3, 5, 8, 'katja']
let arr1= [8, 9, 11, 25, 'colt']
    arr=arr.concat(arr1)
console.log(arr)

const arrObj=[
    {id:1, name:'katja'},
    {id:1, name:'jenya'},
    {id:2, name:'sasha'},
    {id:3, name:'masha'}
]
    arr2=arrObj.filter(el=>el.id===1)
console.log(arr2)


let x=[[1, 2, 3], [1, 2], 5]
let arr3 = x.flat()
console.log(arr3)

function showConsole(){
    const arrObj1=[
        {id:1, name:'katja'},
        {id:1, name:'jenya'},
        {id:2, name:'sasha'},
        {id:3, name:'masha'}
    ]
    arr4=arrObj1.map(el=>el.name+'!')
    console.log(arr4)
}
showConsole()
showConsole()
showConsole()