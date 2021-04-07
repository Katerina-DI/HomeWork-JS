//1
let arr=['a', 'b', 'c']
let arr1=[1, 2, 3]
console.log(arr.concat(arr1))

//2 не выходит в строку, что не так?
let arr2=['a', 'b', 'c']
arr2=arr2.push(1, 2, 3)
console.log(arr2)

//3
let arr3=[1, 2, 3]
console.log(arr3.reverse())

//4
let arr4=[1, 2, 3, 4, 5]
console.log(arr4.slice(0, 3))

//5
let arr5=[1, 2, 3, 4, 5]
console.log(arr5.slice(3))

//6
const arrObj={js:'test', jq: 'hello', css: 'world'}
console.log(Object.keys(arrObj))

//7
function unReverse(x) {
    let arr6=[1, 2, 3, 4, 5]
    for (i = 0; i < x.length; i++){
        arr6[i] = x[(x.length - 1) - i]
    }
    return arr6
}
console.log(unReverse([1, 2, 3, 4, 5]))

//8
let arr7=[[1, 2, 3], [4, 5], [6]]
arr7=arr7.flat()
console.log(arr7.map(i=>x+=i, x=0).reverse()[0])

//9
let arr8=[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
arr8=arr8.flat()
arr9=arr8.flat()
console.log(arr9.map(i=>x+=i, x=0).reverse()[0])

//10
let a=[1, 2, 3, 4, 5]
let b=[1, 2, 3, 4, 5]
function compareConsole(a, b){
    let i = a.length;
    if (i != b.length) return false;
    while (i--) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
let isBool = compareConsole(a.sort().join(),b.sort().join());
console.log(isBool)

//11
let c=[1, 2, 3, 4, 5]
function array(a){
    return a*a
}
console.log(c.map(array))

//12
let f=[1, 2, 3, 4, 5, -8, -9, -6, 7, -10]
function func(el){
    return el < 0
}
console.log(f.filter(func))

//13
let g=[1, 2, 3, 4, 5, -8, -9, -6, 7, -10]
function sumEl(sum, el) {
	return sum + el;
}
console.log(g.reduce(sumEl))