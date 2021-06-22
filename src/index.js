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
// function calcSum(num1, num2) {
//   return num1 + num2;
// }

// //関数を実行する
// const calcsumNum = calcSum(10, 20);
// console.log(calcsumNum); // 30

// let num = 10;
// num = 20;

// let name = "kai";
// name = "kai2";

// // 足し算
// const num1 = 10 + 20;
// console.log(num1); // 30

// //引き算
// const num2 = 20 - 10;
// console.log(num2); // 10

//掛け算
// const num3 = 10 * 20;
// console.log(num3); // 200

// //割り算
// const num4 = 20 / 10;
// console.log(num4);

// //割ったあまり
// const num5 = 10 % 3;
// console.log(num5); // 1

//インクリメント演算子(１を足す)
// let num6 = 10;
// console.log(++num6); //11
// // ＋１されてからnum6が評価される

// let num7 = 10;
// console.log(num7++); //10
// console.log(num7); //11
// // num7が評価されてから＋１される

// デクリメント演算子(1を引く)
// let num8 = 10;
// console.log(--num8); //9
// // -１されてからnum8が評価される

// let num9 = 10;
// console.log(num9--); //10
// console.log(num9); //9
// // num9が評価されてから-１される

//等価演算子（＝＝）、厳密等価演算子（＝＝＝）
// const num = 10;
// const str = "10";
// console.log(num == str); //true
// console.log(num === str); //false

// 不等価演算子（ !＝ ）、厳密不等価演算子（ !＝＝ ）
// const num = 10;
// const str = "10";
// console.log(num != str); //false
// console.log(num !== str); //true

// 大小比較（＞、 ＞＝、 ＜、 ＜＝）
// const num = 10;
// console.log(num > 10); //false
// console.log(num >= 10); //true
// console.log(num < 10); //false
// console.log(num <= 10); //true

// 論理演算子（&&、|| ）
// const trueFlag = true;
// const falseFlag = false;

// //もし左右どちらもtrueなら実行される
// if (trueFlag && falseFlag) {
//   //実行されない
// }

// //もし左右どちらかtrueなら実行される
// if (trueFlag || falseFlag) {
//   //実行される
// }

//例１
// const trueFlag = true;
// const falseFlag = false;

// trueFlag && console.log("A"); // A
// falseFlag && console.log("B"); // 表示されない
// trueFlag || console.log("C"); // 表示されない
// falseFlag || console.log("D"); // D

// //例２
// const name = "kai" && "kai2";
// const name2 = "kai" || "kai2";

// console.log(name); // kai2
// console.log(name2); // kai

// Not演算子（！）
// const trueFlag = true;
// const falseFlag = false;

// if (!falseFlag) {
//   console.log("実行");
// }
// if (!trueFlag) {
//   // 実行されない
// }

// 三項演算子（A？B：C）
// const trueFlag = true;
// const falseFlag = false;

// const result = trueFlag ? true : false;
// console.log(result); // true

// const result2 = falseFlag ? true : false;
// console.log(result2); // false

// if ("") {
//   console.log("実行");
// }

//for
// const nums = [1, 2, 3];
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }
// // 1
// // 2
// // 3
