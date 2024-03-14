// 1.Write a program to print all the numbers from the given array using a loop.
// L = {23, 45, 32, 25, 46,33, 71, 90}
// Output:
// 23
// 45
// 32
// 25
// 46
// 33
// 71
//90
// const input = require('readline-sync')
// let n = input.questionInt("enter the totar nubers : ");
// let arr = [];
// let i =0;
// while(i<n){
//     arr[i] = input.questionInt('enter n ');
//     i++;
// }
// console.log(arr);
// let j=0;
// while(j<n){
//     console.log(arr[j]);
//     j++;
// }



//2. Write a program to create an array of natural numbers till 20 and print it.
// const input = require('readline-sync')
// let n = input.questionInt("enter the total numbers : ");
// let arr = [];
// let i = 0;
// while(i<n){
//     arr[i] = input.questionInt('enter n ');
//     i++;
// }
// console.log(arr);
// let j = 0;
// while(j<n){
//     console.log(arr[j]);
//     j++;
// }


// 3. Write a program to reverse the array and print the reversed array.
// Test Case1:
// Input:
// 23 45 32 25 46 33 71 90
// Output:
// 90
// 71
// 33
// 46
// 25
// 32
// 45
// 23
// const input = require('readline-sync')
// let n = input.questionInt("enter the total number n : ");
// let arr = [];
// let i = 0;
// while(i<n){
//     arr[i] = input.questionInt('enter n ');
//     i++;
// }
// console.log(arr);
// let j = n-1;
// while(j>=0){
//     console.log(arr[j]);
//     j=j-1;
// }


// 4. Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.
// Test Case1:
// Input:
// 7
// 1 2 3 4 5 6 7
// 3
// Output:
// Yes
// Test Case2:
// Input:
// 8
// Output:
// No
// const input = require('readline-sync')
// let n = input.questionInt("enter the total number n :");
// let m = input.questionInt('inter the find out number m :');
// let arr = [n];
// let arr1 = [m];
// let i = 0;
// while(i<n){
//     arr[i] = input.questionInt('inter n ');
//     i++;
// }
// console.log(arr);
// i = 0;
// while(i<n){
//      if (arr[i] == m){
//          console.log(arr[i],'yes');
         
//     } else {
//         console.log(arr[i],'no');
//     }
//      i++;
// } 


// 5.Write a program to print the sum of all the odd numbers and even numbers in the given array.
// Note: In the output, you should print odd numbers sum and even numbers sum in this order only.

// Test Case1:
// Input:
// 23 45 32 25 46 33 71 90
// Output:
// 197
//  168
//..........................first method...........................................
// const input = require('readline-sync')
// let n = input.questionInt("enter total number n : ");
// let arr = [];
// let oddsum = 0;
// let evensum = 0;
// let i = 0;
// while(i<n){
//     arr[i] = input.questionInt('enter number n ')
//     i++;
// }
// console.log(arr);
// let j = 0;
// while(j<n){
//     if(arr[j] % 2 == 0){
//      evensum += arr[j];
//      } else {
//      oddsum += arr[j];
//        }
//       j++;
// }
// console.log('sum of odd numbers', oddsum);
// console.log('sum of even numbers',evensum);

//.......................................second method...................................
// const input = require('readline-sync')
// let n = input.questionInt("enter total number n : ");
// let num,oddsum,evensum, arr = [];

// let i = 0;
// while(i<n){
//     arr[i] = input.questionInt('enter number n ')
//     i++;
// }
// console.log(arr);
//  oddsum = 0;
//  evensum = 0;
// let j = 0;
// while(j<n){
//     num = arr[j];
//     if(num % 2 == 0){
//      evensum += num;
//      } else {
//      oddsum += num;
//        }
//       j++;
// }
// console.log('sum of odd numbers', oddsum);
// console.log('sum of even numbers',evensum);

//.............................third method................................................
// const input = require('readline-sync')
// let n = input.questionInt("enter total number n : ");
// let num, arr = [];

// let i = 0;
// while(i<n){
//     arr[i] = input.questionInt('enter number n ')
//     i++;
// }
// console.log(arr);
// let oddsum = 0;
// let evensum = 0;
// let j = 0;
// while(j<n){
//     num = arr[j];
//     if(num % 2 == 0){
//      evensum += num;
//      } else {
//      oddsum += num;
//        }
//       j++;
// }
// console.log('sum of odd numbers', oddsum);
// console.log('sum of even numbers',evensum);



//6.  Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user.
// Test Case 1:
// Input:
// 5
// 2 4 2 6 3
// Output:
// 2
// Test Case 2:
// Input:
// 6
// 2 4 6 3 3 2
// Output:
//  3 2
//////////////////first method//////////////////////////
// const input = require('readline-sync')
// let n = input.questionInt("enter the total number n : ");
// let arr = [];
// let i = 0;
// while(i<n){
//     arr[i] = input.questionInt("enter the number n ");
//     i++;
// } 
// console.log(arr);
// i = 0;
// let c , j;
// while(i < n)
// {
//     c = 0;
//     j = i + 1;
//     while(j < n)
//     {
//         if (arr[i] ==arr[j])
//         {
//             c = c + 1;
        
//         }
//         j = j+1;
//     }
//     if(c==1)
//     {
//         console.log(arr[i],'dublicate');
//     }
//     i++;
// }


///////////////second method////////////////////////////
// const input = require('readline-sync')
// let n = input.questionInt("enter the total number n : ");
// let arr = [];
// for(let i=0; i<n; i++){
//     arr[i] = input.questionInt("enter the number n ");
// }
// console.log(arr);
// for(i=0; i<n; i++)
// {
//   let  j = i+1
//   let  c=1
//   while(j<n)
//   {
//     if(arr[i]==arr[j])
//     {
//         c+=1;
//      let  k=j
//      while(k<n)
//      {
//         arr[k]=arr[k+1];
//         k++;
//      }
//      n=n-1
//     }
//     j =j+1
//   }
//   if(c>1){
//     console.log(arr[i],'dublicate');
//   }
//   c=1
// }



//7. Write a program to take N numbers from the user and print the frequency of every number.
// Test Case 1:
// Input:
// 6
// 2 4 2 6 3 6
// Output:
// 2 - 2
// 4 - 1
// 6 - 2
// 3 - 1
// const input = require('readline-sync')
// let n = input.questionInt("enter the total number n ; ");
// let arr = [];
// for(let i=0; i<n; i++){
//     arr[i] = input.questionInt('enter the number n ')
// }
// console.log(arr);
// for(i=0; i<n; i++)
// {
//      let  j = i+1;
//      let  c=1;
//     while(j<n)
//     {
//         if(arr[i]==arr[j])
//         { 
//             c=c+1;
//             let k=j;
//             while(k<n)
//             {
//                 arr[k]=arr[k+1];
//                 k++;
//             }
//             n=n-1;
//         }
//         j =j+1;
//     }
//     console.log(arr[i],'-',c);
// }


// Write a program to take two sorted arrays of size M, N from the user as input and merge them into a single sorted array of size M+N (Do not use sorting)
// Test Case1:
// Input:
// 1 2 5 6
// 3 4 7 9
// Output:
// 1 2 3 4 5 6 7 9
const input = require('readline-sync')
let m = input.questionInt("enter the total number m : ");
let n = input.questionInt("enter the total number n : ");
let a = [];
let b = [];
let c = [];
for(let i=0; i<m; i++){
    a[i] = input.questionInt("enter the number n ");
} for(let j=0; j<n; j++){
    b[j] = input.questionInt("enter the number m ");
}
console.log(a,b);
let i=0;
let j=0;
for( let k=0; k<m+n; k++)
{
    if (i<m)
    {
        if(j<n)
        {
            if(a[i]<b[j])
            {
                c[k] = a[i];
                i++;
            }else{
            c[k] = b[j];
            j++;
            }
        }else
        {
        c[k] = a[i];
        i++;
        }
    
    }else{
    
    c[k] = b[j];
    j++;
    }
}
for(let i=0; i<m+n; i++){
    console.log(c[i]);
}