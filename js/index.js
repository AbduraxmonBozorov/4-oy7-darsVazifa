// Switch ... case
// 1
// let n = 3;
// switch (n) {
//   case 1:
//     console.log("Yanvar");
//     break;
//   case 2:
//     console.log("Fevral");
//     break;
//   case 3:
//     console.log("Mart");
//     break;
//   case 4:
//     console.log("Aprel");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("Iyun");
//     break;
//   case 7:
//     console.log("Iyul");
//     break;
//   case 8:
//     console.log("Avgust");
//     break;
//   case 9:
//     console.log("Sentabr");
//     break;
//   case 10:
//     console.log("Oktabr");
//     break;
//   case 11:
//     console.log("Noyabr");
//     break;
//   case 12:
//     console.log("Dekabr");
//     break;

//   default:
//     console.log("Siz 1-12 oralig'idan son kirita olasiz");
//     break;
// }

// 2

// function b(a) {
//   let result = 0;
//   if (a > 0 && a <= 60) {
//     result = "F";
//   } else if (a > 60 && a <= 70) {
//     result = "D";
//   } else if (a > 70 && a <= 80) {
//     result = "C";
//   } else if (a > 80 && a <= 90) {
//     result = "B";
//   } else if (a > 90 && a <= 100) {
//     result = "A";
//   }
//   return result;
// }

// let ball = 79;
// switch (b(ball)) {
//   case "A":
//     console.log("A");
//     break;
//   case "B":
//     console.log("B");
//     break;
//   case "C":
//     console.log("C");
//     break;
//   case "D":
//     console.log("D");
//     break;
//   case "F":
//     console.log("F");
//     break;
//   default:
//     console.log("Xato");
//     break;
// }

// 3
// function vaqt(v) {
//     let result=null;
//     if(v>5 && v<=12){
//         result='tong';
//     }else if(v>12 && v<=17){
//         result='kun';
//     }else if(v>17 && v<=21){
//         result='kech';
//     }else if(v>21 && v<=24 || v>0 && v<=5){
//         result='tun';
//     }
//     return result;
// }

// let soat=3;
// switch (vaqt(soat)) {
//     case 'tong':
//         console.log("xayrli tong");
//         break;
//         case 'kun':
//         console.log("xayrli kun");
//         break;
//         case 'kech':
//         console.log("xayrli kech");
//         break;
//         case 'tun':
//         console.log("xayrli tun");
//         break;

//     default:
//         console.log("Xato");
//         break;
// }

// While ...
// 4

// function raqam() {
//   let number1 = prompt("Raqam kiriting");
//   let i = 0;
//   while (i < 1) {
//     if (number1 >= 0 && number1 <= 9) {
//       console.log(true);
//     } else {
//       // let number1 = prompt("Raqam kiriting");
//       console.log("Raqam kiriting");
//     }
//     i++;
//   }
// }
// raqam();




// 5
// function juft(a) {
//   let i = 0;
//   while (i <= a) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//     i += 2;
//   }
// }
// juft(20)





// 6
// function soz() {
//   let i = 1;
//   while (i < 2) {
//     if (txt == "stop") {
//       console.log(true);
//       i++;
//     } else {
//       txt = prompt("So'z kiriting");
//       console.log(txt);
//     }
//   }
// }
// let txt = prompt("So'z kiriting");
// soz(txt);




// 7
// function orta(num){
//   let i=1;
//   let sum=0;
//   let counter=0;
//   while(i<=num){
//     let son=+prompt(`${i} - sonni kiriting`);
//     sum+=son;
//     counter++;
//     i++;
//   }
//   let a=sum/counter;
//   return a;
// }
// console.log(orta(5));