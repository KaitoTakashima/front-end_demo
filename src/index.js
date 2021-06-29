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

//while
// let num = 1;
// while (num <= 3) {
//   console.log(num);
//   num++;
// }
// // 1
// // 2
// // 3

//if else
// const name = "kai";

// if (name === "tanaka") {
//   console.log("tanakaさんです");
// } else if (name === "yamada") {
//   console.log("yamadaさんです");
// } else {
//   console.log("その他の名前です");
// }
//その他の名前です

//switch
// const name = "kai";

// switch (name) {
//   case "tanaka":
//     console.log("tanakaさんです");
//     break;
//   case "yamada":
//     console.log("yamadaさんです");
//     break;
//   default:
//     console.log("その他の名前です");
//     break;
// }
//その他の名前です

//try catch
// try {
//   //例外を投げる
//   throw new Error("例外が発生");
// } catch (error) {
//   console.log(error.message); // 例外が発生
// }

//従来の文字列
// const name = "kai";
// const age = 22;

// //変数の結合
// const sentence = name + "は" + age + "歳です。";
// console.log(sentence); // kaiは22歳です。

//テンプレート文字列
// const name = "kai";
// const age = 22;

// const sentence = `${name}は${age}歳です。`;
// console.log(sentence); // kaiは22歳です。

//従来の関数定義(function)
// const func1 = function (name) {
//   return `${name}です。`;
// };
// //アロー関数
// const func2 = (name) => {
//   return `${name}です。`;
// };

// console.log(func1("kai")); //kaiです。
// console.log(func2("kai2")); //kai2です。

//特徴１（引数が１つの時、カッコを省略できる）
// const func = name => {
//   return `${name}です。`;
// }
// console.log(func("kai")); //kaiです。

//引数が2つ以上だとエラー
// const func = name,age => {
//   return `${name}です。`;
// }
// console.log(func("kai")); //kaiです。

// const func2 = (name, age) => {
//   return `${name}です。`;
// };
// console.log(func2("kai")); //kaiです。

//特徴２(処理が1行で終わる時、「{}」と「return」は省略できる)
// const func = (name) => `${name}です。`;

// console.log(func("kai")); //kaiです。

//特徴3(カッコで囲むことにより、1塊として認識させることも可能)
// const func = () => ({
//   name: " kai",
//   age: 22
// });

// console.log(func()); //{name: "kai", age: 22}

// //従来の配列の値の取り出し方
// const list = ["a", "b"];
// const item1 = list[0];
// const item2 = list[1];
// console.log(item1, item2); //a b

// //分割代入による値の取り出し方
// const list = ["a", "b"];
// const [item1, item2] = list;
// console.log(item1, item2); //a b

// //従来のオブジェクトの値の取り出し方
// const userInfo = {
//   name: "kai",
//   age: 22
// };
// const username = userInfo.name;
// const userage = userInfo.age;
// console.log(username, userage); //kai 22

// 分割代入による値の取り出し方
// const userInfo = {
//   name: "kai",
//   age: 22
// };
// const { name, age } = userInfo;
// console.log(name, age); //kai 22

// 分割代入による値の取り出し方(変数変更)
// const userInfo = {
//   name: "kai",
//   age: 22
// };
// const { name: newName, age: newAge } = userInfo;
// console.log(newName, newAge); //kai 22

//デフォルト値（オブジェクト）
// const userInfo = {
//   age: 22
// };
// const { name = "ゲスト", age } = userInfo;
// console.log(name, age); //ゲスト 22

// //デフォルト値(関数)
// const welcomeMessage = (username = "ゲスト") => {
//   const message = `こんにちは、${username}さん`;
//   console.log(message);
// };
// welcomeMessage("kai"); //こんにちは、kaiさん
// welcomeMessage(); //こんにちは、ゲストさん
