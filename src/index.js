// console.log("テスト");
// //テスト

// const test = "kai";
// test = "kai2"; //再代入エラー
// console.log(test);

// let test = "kai";
// test = "kai2"; //再代入できる
// let test = "kai3"; //再宣言エラー

// var test = "kai";
// test = "kai2"; //再代入できる
// var test = "kai3"; //再宣言できる

// const num = 1;
// let num2 = num;
// num2 = 10;
// console.log(num); //1
// console.log(num2); //10

// const nums = [1, 2];
// const nums2 = nums;
// nums2[0] = 10;
// console.log(nums); // [10, 2]
// console.log(nums2); // [10, 2]

// const num = [1, 2];
// num[0] = 10;
// num.push(100);
// console.log(num); // [10, 2, 100]

// const myProfile = {
//   name: "kai",
//   age: 22
// };
// console.log(myProfile.name); // kai

// myProfile.name = "kai2";
// myProfile.age = 99;
// console.log(myProfile); // {name: "kai2", age: 99}

// //関数の定義
// function sayHello() {
//   console.log("こんにちは！");
// }

// //関数を実行する
// sayHello(); //　こんにちは！

//関数の定義
function calcSum(num1, num2) {
  return num1 + num2;
}

//関数を実行する
const calcsumNum = calcSum(10, 20);
console.log(calcsumNum); // 30
