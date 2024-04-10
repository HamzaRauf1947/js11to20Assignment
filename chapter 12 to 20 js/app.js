//todo chapter 12 to 13
//? 1)
// var charCheck = ((char)=>{
//     if(typeof char !=="string" && typeof char !=="number"){
//         char = String.fromCharCode(char);
//     }
//     if(typeof char == "number"){
//         char = char.toString();
//     }
//     var checkCode = char.charCodeAt(0);

//     if(checkCode >= 48 && checkCode <=57){
//         return "Number";
//     }else if(checkCode >= 65 && checkCode <=90){
//         return "Upper case Letter";
//     }else if(checkCode >= 97 && checkCode <=122){
//         return "Lower case Letter";
//     }else{
//         return "Other"
//     }
// })


// let input = " ";
// console.log(`${input} is ${charCheck(input)}`);

//? 2)
// let numGLE = ((a,b)=>{
//     if(a>b){
//         return `${a} is greater and ${b} is lesser`
//     }else if(a==b){
//         return `${a} is equal to ${b} `
        
//     }else{
//         return `${a} is lesser and ${b} is greater`

//     }

// })
// let first = +prompt("Enter 1st num");
// let second = +prompt("Enter 2nd num");
// console.log(numGLE(first,second));

//? 3
// var checkNum = ((num)=>{
//     if(num>0){
//         console.log(`${num} is +ve`);
//     }else if(num<0){
//         console.log(`${num} is -ve`);
//     }else{
//         console.log(`num is 0`);

//     }
// })
// let number = +prompt("Enter the number") ;
// checkNum(number);

//? 4
// let vowelCheck = ((chr)=>{
//     if(chr==="a" || chr==="e" || chr==="i" || chr==="o" || chr==="u"){
//         console.log(`${chr} is vowel`);
//     }else{ 
//         console.log(`${chr} is not vowel`);
//     }
// })

// let char = prompt("Enter 1 character");
// vowelCheck(char);

//? 5
// let correctPass = "1234";
// var userPass = prompt("Enter pass");

// if(userPass ===""){
//     alert("Enter Password")
// }
// else if(userPass === correctPass){
//     console.log("Log in Successful");
// }else{
//     console.log("wrong Password");
// }

//? 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }

// console.log(greeting);

//? 7

// let time = 1900;

// if(time>0 && time<1200){
//     console.log("Good morning");
// }else if(time>1200 && time<1700){
//     console.log("Good Afternoon");
// }else if(time>1700 && time<2100){
//     console.log("Good Morning");
// }else if(time>2100 && time<2359){
//     console.log("Good Night");
// }


//todo chapter 14 to 16


//? 1
// let futureStd = [];
//? 2
// let futurStudents = new Array(1,2,3);
// console.log(futurStudents);
//? 3
// let strArr = ["Arthur","Dutch Van der land"]
//? 4
// let numArr = [2,3,5,7,11];
//? 5
// let bolArr = [true,false,true,false,true];
//? 6 
// let mixArr = [1,"hello",true]
//? 7 
// document.write("Qualification: <br><br>");
// let qualArr = ["1) SSC","2) HSC","3) BCS","4) BS","5) BCOM","6) MS","7) M.Phil.","8)PhD"]
// for (let i = 0; i < qualArr.length; i++) {
//   document.write(`${qualArr[i]} <br>`)
  
// }
//? 8 
// let stdName = ["hamza","taha","harry"];
// let score = [300,400,450];
// let percentage =[]
// let totalNum = 500;
// for (let i = 0; i < score.length; i++) {
//   percentage[i] = score[i]/totalNum*100;
// }
// for (let i = 0; i < stdName.length; i++) {
  
//   console.log(`${stdName[i]} score ${score[i]}. percentage ${percentage[i]}%`);
  
// }

//?9
// let color = ["Black"];
// console.log(color);
// //* remove last element
// color.unshift("blue")
// console.log(color);
// //* add at the last
// color.push("red")
// console.log(color);
// //* add at the begining
// color.unshift("green","skyBlue")
// console.log(color);
// //* remove at the begining 
// color.shift();
// console.log(color);
// //* remove at the last
// color.pop();
// console.log(color);
// //* user choice addition of color
// let n = +prompt("At what index u want to add color")
// let colorName = prompt("Give Color name")
// color.splice(n,0,colorName);
// console.log(color);
// //* user choice deletion of color
// let del = +prompt("At what index u want to delete color")
// let delNum = +prompt("how many color u want to delete")
// color.splice(del,delNum);
// console.log(color);

//? 10
// let arr = [320,230,480,120];
// arr.sort();
// console.log(arr);

//? 11
// let cityList = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// console.log(`Cities List:`);
// console.log(`${cityList}`);
// let selectedCity = cityList.slice(0,2);
// console.log(`Selected Cities List:`);
// console.log(`${selectedCity}`);

//? 12
// let arr = ["This","is","my","cat"];
// let stringArr = arr.join(" ")
// console.log(stringArr);

//? 13
//*FIFO
// let arr = []
// let addValue = ((val)=>{
//     arr.push(val);
// })

// let removeFifo= (()=>{
//     return arr.shift();
// })

// addValue("first");
// addValue("second");
// addValue("third");

// console.log(removeFifo());
// console.log(removeFifo());
// console.log(removeFifo());

//? 14
//*LIFO
// let arr = []
// let addValue = ((val)=>{
//     arr.push(val);
// })

// let removeLifo= (()=>{
//     return arr.pop();
// })

// addValue("first");
// addValue("second");
// addValue("third");

// console.log(removeLifo());
// console.log(removeLifo());
// console.log(removeLifo());


//? 15
// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select id='manufacturerSelect'>");
// for (let i = 0; i < manufacturers.length; i++) {
//     document.write(`<option value = ${manufacturers[i]} > ${manufacturers[i]} </option>`)
// }


//todo Chapter 17 to 20 
//? 1
// let emptyArr = [];
//? 2
// let multiDimensional = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ]
// console.log(multiDimensional);

//? 3 
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
  
// }

//? 4
// let n = +prompt("Enter a number to show th multiplication table");
// let n1 = +prompt("Enter the length multiplication table");

// for (let i = 1; i <= n1; i++) {
//   console.log(`${n} x ${i} = ${n*i}`);
  
// }

//? 5 
// let fruits = ["apple","banana","mango","orange","strawberry"]
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`Element at index ${i} is ${fruits[i]}`);
  
// }

//? 6

//* a)
// for (let i = 1; i <= 15 ; i++) {
//   document.write(`${i} `)
  
// }
//* b)
// for (let i = 10; i >=1; i--) {
//     document.write(`${i} `)
// }

//* c)
// for (let i = 0; i <= 20; i++) {
//   if(i%2===0){
//     document.write(`${i} `)
//   }
  
// }

//* d)
// for (let i = 0; i <= 20; i++) {
//     if(i%2!==0){
//       document.write(`${i} `)
//     }
    
//   }

//* e)

// for (let i = 2; i <= 20; i++) {
//     if(i%2===0){
//       document.write(`${i}k `)
//     }
    
//   }


//? 7
// let bakery= ["cake","apple pie","cookies","chips","patties"];
// let user = prompt("what do you want to order Sir/Madam");
// let isFound = false;
// for (let i = 0; i < bakery.length; i++) {
//   if(user === bakery[i]){
//     console.log(`${user} is found at index ${i} in our bakery`);
//     isFound = true;
//     break;
//   }
// }
// if(isFound == false){
//   console.log(`We are sorry ${user} is not available`);
// }

//? 8
// let A = [24, 53, 78, 91, 12];
// let largestNum = A[0];
// for (let i = 0; i < A.length; i++) {
//   if(A[i]>largestNum){
//     largestNum = A[i];
//   }
  
// }
// console.log(`largest number is ${largestNum}`);

//? 9
// let A = [24, 53, 78, 91, 12];
// let smallNum = A[0];
// for (let i = 0; i < A.length; i++) {
//   if(A[i]<smallNum){
//     smallNum = A[i];
//   }
  
// }
// console.log(`largest number is ${smallNum}`);

//? 10
// for (let i = 1; i <= 100; i++) {
//   if(i%5 === 0){
//     console.log(i);
//   }
// }

  













