// let num = [2, 34, 4, 5, 11, 3, 23];
// for (let i = 0; i < num.length; i++) {
//     for (let j = 0; j < num.length; j++) {
//         if (num[j] > num[j + 1]) {
//             let temp = num[j];
//             num[j] = num[j + 1];
//             num[j + 1] = temp;

//         }
//     }
// }
// console.log(num)



let nam = "shahzad";
for (let i = 0; i < nam.length; i++) {
    for (let j = 0; j < nam.length; j++) {
        if (nam[j] < nam[j + 1]) {
            let temp = nam[j];
            nam[j] = nam[j + 1];
            nam[j + 1] = temp;

        }
    }
}
console.log(nam)






// let arr = sumAll[1, 10]
// return sumAll
// arr
// console.log(arr)