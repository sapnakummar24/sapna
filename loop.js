// 1.Take the number N and the name from the user as inputs, and print the name N times.

// Test Case1:
// Input:
// 2
// Bedanti
// Output:
// Bedanti
// Bedanti
// const input = require('readline-sync')
// let n = input.questionInt("enter n ");
// let i=1;
// while(i<=n){
//     console.log('bedanti');
//     i++;
// }


//2. Take a number N from the user as input, and print even numbers up to N.

// Test Case1:
// Input:
// 10
// Output:
// 2 4 6 8
// const input = require('readline-sync')
// let n = input.questionInt("enter n ")
// let i=1
// while(i<n){
//     if(i%2==0){
//     console.log(i);
//     i++;
// }else{
//     i++;
// }
// }


//3. Write a program to print the sum of odd numbers up to N.

// Test Case1:
// Input:
// 20
// Output:
// 100
// const input = require('readline-sync')
// let n = input.questionInt("enter n ");
// let i=1;
// let sum=0;
// while(i<=n){
//     if(i%2!==0){
//         sum=sum+i;
//         i++;
//     }else{
//         i++;
//     }
// }
// console.log(sum);


//4. Write a program to take two integers M, and N and print the sum of numbers in the range M to N.

// Test Case1:
// Input:
// 2
// 7
// Output:
// 27
// Explanation:
//Output should be 27 as the sum of numbers (2+3+4+5+6+7=27)
// const input = require('readline-sync')
// let m = input.questionInt("enter m ");
// let n = input.questionInt("enter n ");
// let i=2;
// var sum=0;
// while(i<=n){
//     sum=sum +i;
//     i=i+1;
// }
// console.log(sum);


//5. Write a program to calculate the sum of the following series where N is input from the user. 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N

// Test Case1:
// Input:
// 4
// Output:
// 2.08
// const input = require('readline-sync')
// let n = input.questionInt("enter n ");
// let i=1;
// let sum=0;
// while(i<=n){
//     sum=sum+1/i;
//     i=i+1
// }
// // console.log(sum);


//6. Write a program to take a number from the user and print the number of digits in the given number. (can you do it without loop O(1) )

// Test Case1:
// Input:
// 456
// Output:
// 3
// const input = require('readline-sync')
// let n = input.questionInt("enter n ");
// let i=0;
// let c=0;
// while(n!=0){
//     let r=n%10;
//     n=(Math.floor(n/10));
//     c=c+1;
// }
// console.log(c);



//7. Write a program to take a number from the user and print the sum of the digits of the given number.
// Test Case1:
// Input:
// 456
// Output:
// 15
// Explanation:
// 4+5+6 = 15
// const Input = require('readline-sync')
// let n = Input.questionInt("enter n ");
// let i=0;
// let sum=0;
// while(i<=n){
//      p=n%10;
//      n=(Math.floor(n/10));
//     sum=sum+p;
//     i=i+1;
// }
// console.log(sum);



//8. Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.
// Test Case1:
// Input:
// 123
// Output:
// 321
// const input = require('readline-sync')
// let n = input.questionInt("enter n ");
// let sum=0;
// while(n>0){
//     d=n%10;
//     n=(Math.floor(n/10));
//     sum=sum*10+d;
// }
// console.log(sum);


//9. Factors question
// const input = require('readline-sync')
// let n = input.questionInt("enter  n ");
// let i = 1;
// while(i<=n){
//     if(n%i==0)
//     {
//         console.log(i);
//         i++;
//     }else{
//         i++;
//     }
// }


//10. Write a program to take two numbers from the user as input and obtain the HCF and LCM of the two numbers.

// Test Case1:
// Input:
// 12
// 15
// Output:
// 3
// // 60
// const input = require('readline-sync')
// let n = input.questionInt("enter total input n ");
// let a = input.questionInt("enter a ");
// let b = input.questionInt("enter b ");
// let p=a;
// let q=b;
// let i=2;
// while(i<=n){
//     r=a%b;
// if(r==0){
//     b=b;
//     i=i+1;
// }else{
//     a=b;
//     b=r;
// }
// }
// {
//     lcm=(p*q)/b;
//     console.log(b,"is hcf number");
//     console.log(lcm,"is lcm number")
// }



//11. Write a program to take a number from the user and then determine if that number is a special type of number called a 'perfect number'.
// A perfect number is a number where the sum of all its factors (excluding the number itself) is equal to the number itself. Print Yes if the number is a perfect number else print No.

// Test Case1:
// Input:
// 6
// Output:
// Yes
// Explanation:
// The program takes the number 6 as input. It then calculates the factors of 6, which are 1, 2, and 3. The sum of these factors (1 + 2 + 3) is equal to 6, so 6 is a perfect number.
// Test Case2:
// Input:
// 12
// Output:
// No
// Explanation:
// The program takes the number 12 as input. It calculates the factors of 12, which are 1, 2, 3, 4, and 6. The sum of these factors (1 + 2 + 3 + 4 + 6)
// is equal to 16, which is not equal to 12. Therefore, 12 is not a perfect number.
// const Input = require('readline-sync')
// let n = Input.questionInt("enter n ");
// let i=0;
// let m=0;
// while(i<n){
//     if(n%i==0){
//         m=m+i;
//         i=i+1;
//     }else{
//         i=i+1;
//     }
// }{
//     if(m==n){
//         console.log(n,'perfect number');
//     }else{
//         console.log(n,'not perfect number');
//     }
// }


