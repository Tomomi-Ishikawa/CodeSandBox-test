/* 分割代入*/
const myProfile = {
  name: "じゃけぇ",
  age: 28
};

const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message3);

// myProfile 毎回呼ぶと長くなる
// 分割代入
const { name, age } = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳です~`;
console.log(message4);
// constですでに定義していると使えない。

// 配列でも使用できる
const myProfile2 = ["じゃけぇ", 28];
const message5 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です!`;
console.log(message5);

// 形式が違うと代入できない
//TypeError
// Invalid attempt to destructure non-iterable instance.
const myProfile3 = ["じゃけぇ", 28];
const [names, ages] = myProfile3;
const message6 = `名前は${names}です。年齢は${ages}歳です!`;
console.log(message6);

/*
デフォルト値
*/

// const sayHello = (name) => console.log(`こんにちは！${name}さん`);
// sayHello() // undefinedさんになる
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
sayHello(); // ゲストさんになる
sayHello("じゃけぇ");

/*
スプレット構文 ...
*/
//配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);

// スプレット構文 =>順番に代入処理するようなイメージ
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
// ...スプレット構文で配列をまとめて受け取る
const [num1, num2, ...arr3] = arr2;
console.log(num1, num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// コピー
const arr6 = [...arr4];
console.log(arr6);

//コピーして結合
const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4;
console.log(arr8);
arr8[0] = 100;
console.log(arr8);
// イコールでコピーするとarr4の値まで上書きされる

/* map. flitter使った配列の処理*/

const nameArr = ["田中", "山田", "佐藤"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

nameArr.map((name) => console.log(name));
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// と同じ

// fliter
//条件抽出
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は、${nameArr[index]}です`);
}

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

const newNameArr = nameArr.map((name) => {
  if (name === "佐藤") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

// 三項演算子

//ある条件 ？　条件がTrue の時　：条件がFalse の時
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

//三桁区切りの関数
const num = 1300; //文字列ではNG
console.log(num.toLocaleString());
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です";
};
console.log(checkSum(50, 60));
console.log(checkSum(50, 30));

// 論理演算子の本当の意味

//論理演算子　→ && ||

const flag1 = true;
const flag2 = true;
if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}

if (flag1 || flag2) {
  console.log("1も2はtrueになります");
}

const num3 = null;
const fee = num3 || "金額未設定です";
console.log(fee);

// ||の左側がfalse なら右側を返す
const num4 = 100;
const fee2 = num4 || "金額未設定です";
console.log(fee2);

// ＆＆の左側がtrueなら右側を返す
const num5 = 100;
const fee3 = num5 && "何か設定されました";
console.log(fee3);
