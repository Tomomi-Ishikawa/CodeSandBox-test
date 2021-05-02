/**
 * const, let 等の変数宣言
→EC2015で追加された
 */

var val1 = "var変数";
console.log(val1);

// var　変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var 変数は再宣言可能
var var1 = "var変数を再宣言";
console.log(var1);

// -> 意図しない上書きや再宣言は var変数では生じていた。

// let 変数
let val2 = "let変数";
console.log(val2);

// let は上書きが可能
val2 = "let変数を上書き";
console.log(val2);

// let は再宣言不可
// let val2 = "let変数を再宣言";
// console.log(val2);
// Identifier 'val2' has already been declared

//const変数
const val3 = "const変数";
console.log(val3);

// const 変数は上書き不可
// val3 = "const変数を上書き"
// TypeError "val3" is read-only

//　const変数は再宣言も不可
// const val3 = "const変数を再宣言"
// Identifier 'val3' has already been declared

//　オブジェクト定義
const val4 = {
  name: "じゃけぇ",
  age: 28
};

console.log(val4);

// オブジェクトの中身を上書き

val4.name = "jk";
console.log(val4);
// constで定義しても中身は固定されず、上書きができる。

// オブジェクトの中身追加
val4.address = "Hiroshima";
console.log(val4);

// オブジェクトの定義する時は const　しか使わない
// const で定義したオブジェクトはプロパティの変更が可能

//配列
const val5 = ["dog", "cat"];
val5[0] = "bird"; //　配列０番目の上書き
console.log(val5);

//　配列の中身の追加
val5.push("monkey");
console.log(val5);

/*
constで定義した配列はプロパティの変更が可能
reactでの開発ではほとんどconstを使用する
処理の中で上書きが必要な場合はletを使用する
*/

/////////

/*
テンプレート文字列
*/

const name = "じゃけぇ";
const age = 28;
// 私の名前はじゃけぇです。年齢は28さいです。

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);
// 結語の度に　＋　を描かないといけないので長くなってしまう。

// テンプレート文字列を用いた方法
// バッククオートを用いる
// shift + @ --> `
const message2 = `私の名前は${name}です。年齢は${age}です~。`;
console.log(message2);
// ${}で変数の呼び出できる

/*
アロー関数
*/

// function func1(str) {
//   return str;
// }
//もしくは

const func1 = function (str) {
  return str;
};

// 引数　strをそのまま返す処理
console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// }

/////

/* カッコは省略できる　※補完で（）つく
const func2 = str => {
  return str;
}*/
////
// return　{}省略できる
// {}でブラケットを囲った時は、returnが必要
const func2 = (str) => str;
console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
//１行で定義
const func3 = (num1, num2) => num1 + num2;

console.log(func3(10, 20));
