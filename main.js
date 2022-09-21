// // =====DATA TYPES====









// //  =====FOR LOOP=====

    // // 1-task

// let k = 4;
// let n = 6;
// for (let i = 0; i < n ; i++ ){
//     console.log(k);
// }

    // // 2-task

// let a = 8;
// let b = 2;
// for (let i = b; i <= a; i++ ){
//     console.log(i);
// }

    // // 3-task

// let a = 8;
// let b = 2;
// for (let i = a - 1; i > b; i-- ){
//     console.log(i);
// }


    // // 4-task

// let candies = 10;
// for (let i = 1; i <= candies; i++ ){
//     console.log((i)*10000 + ' sum');
// }

    // // 5-task

// let candies = 1;
// for (let i = 0.1; i <= candies; i += 0.1 ){
//     console.log(((i)*10000) + ' sum');
// }

    // //  6-task

// let candies = 2;
// for (let i = 1.2; i <= candies; i += 0.2 ){
//     console.log(((i)*10000) + ' sum');
// }


    // 7-task

// let a = 1;
// let b = 5;

// let sum = 0
// for (let i = a; i < b; i++){
//   sum += i
// }
// console.log(sum);

    // 8-task

// let a = 1;
// let b = 9;

// let sum = 1
// for (let i = a; i < b; i++){
//   sum *= i
// }
// console.log(sum);

    // 9-task

// let a = 1;
// let b = 5;

// let sum = 0
// for (let i = a; i < b; i++){
//   sum += i**2
// }
// console.log(sum);

    // 10-task



    // 11-task

// let n = 90;
// for (let i = 1; i < n; i++) {
//     console.log((i) - ((i)%2 == 0));
// }


// 12-task

// let n = 16;
// for (let i = 0; i < n; i++) {
//     console.log((i) - !((i)%2 == 0));
// }

// 13-task



// 14-task



    // 15-task

// let n = 90;
// for (let i = n; i > 0; i--) {
//     console.log(i);
// }

    // 16-task

// let n = 50;
// for (let i = n; i > 0; i--) {
//     console.log((i) - ((i)%5 == 0));
    
// }

// 17-task

// let n = 4;

// let sum = 1
// for (let i = n; i > 0; i--){
//     sum *= i
// }
// console.log(sum);


// 18-task



// 19-task


// 20-task


// 21-task


// //  =====switch case=====

      // // 1-task

// var num = 3;
// switch (num) {
//     case 1:
//         console.log('Dushanba');
//         break;
//     case 2:
//         console.log('Seshanba');
//         break; 
//     case 3:
//         console.log('Chorshanba');
//         break;
//     case 4:
//         console.log('Payshanba');
//         break;
//     case 5:
//         console.log('Juma');
//         break;
//     case 6:
//         console.log('shanba');
//         break;   
//     case 7:
//         console.log('Yakshanba');
//         break;             
//     default:
//         console.log('Bunday sonda hafta kuni mavjud emas!');
//         break;
// }

     // // 2-task

// var k = 6;
// switch (k) {
//     case 1:
//         console.log('yomon');
//         break;
//     case 2:
//         console.log('qoniqarsiz');
//         break;
//     case 3:
//         console.log('qoniqari');
//         break;    
//     case 4:
//         console.log('yaxshi');
//         break;  
//     case 5:
//         console.log('alo');
//         break;       
//     default:
//         console.log('Bunday baho mavjud emas!');
//         break;
// }

     // // 3-task

// var monthNumber = 13;
// switch (monthNumber) {
//     case 12:
//     case 1:
//     case 2:        
//         console.log('Qish');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Bahor');
//         break; 
//     case 6:
//     case 7:
//     case 8:
//         console.log('Yoz');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('Kuz');
//         break;           
//     default:
//         console.log('Bunday sonda oy nomlari mavjud emas!');
//         break;
// }

      // // 4-task

// var monthNumber = 4;
// switch (monthNumber) {
//     case 1:
//     case 3:
//     case 5: 
//     case 7:
//     case 8:
//     case 10:
//     case 12:                   
//         console.log('Bu oyda 31 kun bor!');
//         break;
//     case 4:
//     case 6: 
//     case 9:
//     case 11:
//         console.log('Bu oyda 30 kun bor!');
//         break; 
//     case 2:
//         console.log('Bu oyda 28 kun bor!');
//         break;           
//     default:
//         console.log('Bunday sonda oy kunlari mavjud emas!');
//         break;
// }

// // 5-task



// // 6-task

// var baho = 2; 
// switch (baho) {
//     case 2:
//         console.log('Siz vabsheta nima qib o`qib yuribsiz 😲');
//         break;
//     case 3:
//         console.log('Sizning stipendiyangiz 600 ming. Yaxshiroq o`qing ko`proq olsiz😌');
//         break;
//     case 4:
//         console.log('Sizning stipendiyangiz 800 ming! Bugun boysiz to`yib ovqatlaning😂');
//         break;
//     case 5:
//         console.log('Tabriklaymiz sining stipendiyangiz 1 million sum, mazza qilib ishlating😎'); 
//         break;   
//     default:console.log('Noto`g`ri baho kiritdingiz!');
//         break;
// }



//  // FUNCTION

// function optinal(attend,length){
//     if ((typeof attend === "string" || typeof length === "number") && attend > 0 && length > 0 && attend >= length) {
//         return true
//     }else{
//         return false
//     }
// }
