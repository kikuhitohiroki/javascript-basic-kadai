// 変数numを定義します
let num = 15; // 例えば、15

// 変数numが3の倍数かどうかを調べます
if (num % 3 === 0) {
    console.log("3の倍数です");
}
else {
    console.log("3の倍数ではありません");
}

// 変数numが5の倍数かどうかを調べます
if (num % 5 === 0) {
    console.log("5の倍数です");
}
else {
    console.log("5の倍数ではありません");
}



if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
}
else if (num % 3 === 0) {
    console.log("3の倍数です");
}
else if (num % 5 === 0) {
    console.log("5の倍数です");
}
else {
    console.log(num);
}