////1 Write a program to take two numbers from the user and determine the greater of those two given numbers.
// const input = require('readline-sync')
// let a = input.questionInt("enter number");
// let b = input.questionInt("enter number");
// if(a>b){
//  console.log(a);
// }
// else{
//     console.log(b);
// }


// 2 Write a program to take a number from the user and print that number as Odd or Even.
// const input = require('readline-sync')
// let a = input.questionInt("enter number");
// if(a%2==0){
//     console.log(a,"even");
// }else{
//     console.log(a,"odd");
// }


///3 Write a program to take a number from the user and output whether that number is negative, positive or zero.
// const input = require('readline-sync')
// let a = input.questionInt("enter number");
// if(a==0){
//     console.log(a,"zero");
// } else if(a>0){
//     console.log(a,"positive");
// }else{
//     console.log(a,"negative")
//  }


//4 Write a program to take an integer as input and print the smallest positive integer that is a multiple of both 2 and n.
//  const input = require('readline-sync')
//  let n = input.questionInt("enter n ");
//  if(n%2==0){
//     console.log(n);
//  }else{
//     n = n*2
//     console.log(n);
//  }


///5 Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)
// const input = require('readline-sync')
// let a = input.questionInt("enter a ");
// let b = input.questionInt("enter b ");
// let c = input.questionInt("enter c ");
// if(a>b){
//     max = a;
//     min = b;
// }else{
//     max = b;
//     min = a;
// }
// if(b>c){
//     max1 = b;
//     min1 = c;
// }else{
//     max1 = c;
//     min1 = b;
// }
// if(max>max1){
//     console.log(max);
// }else{
//     console.log(max1);
// }


///6 Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the numbers are distinct).
// const input = require('readline-sync')
// let a = input.questionInt("enter a ");
// let b = input.questionInt("enter b ");
// let c = input.questionInt("enter c ");
// let d = input.questionInt("enter d ");
// if(a>b){
//      max = a;
//      min = b;
// }else{
//     max = b;
//     min = a;
// }
// if(c>d){
//     max1 = c;
//     min1 = d;
// }else{
//     max1 = d ;
//     max1 = c;
// }
// if(max>max1){
//     console.log(max);
// }else{
//     console.log(max1);
// }


/// 7.Write a program to take a year from the user and output whether a given year is a leap year or not.
//Note: A year is said to be a leap year if it is either divisible by 400 or it should be divisible by 4 and not by 100.
// Test Case1:
// Input:
// 1800
// Output:
// No

// Test Case2:
// Input:
// 2000
// Output:
// Yes

// const input = require('readline-sync')
// let y= input.questionInt("enter year y ");
// if(y%4==0){
//     if(y%100!==0){
//         console.log(y ,"yes ");
//     }else if(y%400==0){
//         console.log(y,"yes ");
//     }else{
//         console.log(y,"not ");
//     }
// }else{
//     console.log(y,"not ");
// }

// const input = require('readline-sync')
// let y= input.questionInt("enter year y ");
// if(y%4==0){
//     if(y%100!==0){
//         console.log(y, "yes leap year");
//     }else if(y%400==0){
//         console.log(y,"yes leap year");
//     }else{
//         console.log(y,"not leap year");
//     }
// }else{
//     console.log(y,"not leap year");
// }

////8.Write a program to take 3 numbers from the user and output the second max of 3 numbers.
// (First, do it in the normal way then do it by using 3 comparisons)

// Test Case1:
// Input:
// 5
// 4
// 6
// Output:
// 5
// const input = require('readline-sync')
// let a = input.questionInt("enter a ");
// let b = input.questionInt("enter b ");
// let c = input.questionInt("enter c ");
// if(a>b){
//     max=a;
//     min=b;
// }else{
//     max=b;
//     min=a;
// }
// if(a>c){
//     max1=a;
//     min1=c;
// }else{
//     max1=c;
//     min1=a;
// }
// if(max<max1){
//     console.log(max);
// }else{
//     console.log(max1);
// }


///9.Write a program to take the basic salary of an employee and calculate its Gross salary according to the following: (Gross salary is the sum of basic salary, HRA, and DRA)
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// Test Case1:
// Input:
// 17000
// Output:
// 36550
// Explanation:
// Since the basic salary lies in the bracket 10000 <= basic salary <= 20000, the HRA equals 25% of the salary = 4250, and the DRA equals 90% of the basic salary = 15300. Hence the total salary is 17000+15300+4250 = 36550
// const input = require('readline-sync')
// let S = input.questionInt("enter s ")
// if(S<=10000){
//    HRD = S*20/100;
//    DA = S*80/100;
//    GS= S+HRD+DA;
//    console.log(GS);
// }
// else if (S<=20000){
//     HRD = S*25/100;
//     DA = S*90/100;
//     GS = S+HRD+DA;
//     console.log(GS);
// }
// else
// {
//     HRD = S*30/100;
//     DA = S*90/100
//     GS = S+HRD+DA
//     console.log(GS);
// }



///10.Write a program to input electricity unit charges and calculate the total electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

// Test Case1:
// Input:
// 200
// Output:
// // 192
// const input = require('readline-sync')
// let U = input.questionInt("enter U ");
// if(U<=50){
//     B=U*0.50
//     S=B*20/100
//     T=B+S
//     console.log(T)
// }
// if(U<=150){
//     B=(U*0.50)+(U-50)*0.75
//     S=B*20/100
//     T=B+S
//     console.log(T)
// }
// if(U<=250){
//     B=100+(U-150)*1.20
//     S=B*20/100
//     T=B+S
//     console.log(T)
// }else{
//     B=220+(U-250)*1.50
//     S=B*20/100
//     T=B+S
//     console.log(T)
// }



/////11.Write a program to take 4 numbers from the user and output the third max of these 4 numbers.
// Test Case1
// Input:
// 5
// 4
// 6
// 7
// Output:
// 5
// const input =require('readline-sync')
// let a = input.questionInt("enter a ");
// let b = input.questionInt("enter b ");
// let c = input.questionInt("enter c ");
// let d = input.questionInt("enter d ");
// if(a>b){
//     max=a;
//     min=b;
// }else{
//     max=b;
//     min=b;
// }
// if(c>d){
//     max1=c;
//     min1=d;
// }else{
//     max1=d;
//     min1=c;
// }
// if(max>max1){
//     max2=max;
//     min2=max1;
// }else{
//     max2=max1;
//     min2=max;
// }
// if(min>min1){
//     max3=min;
//     min3=min1;
// }else{
//     max3=min1;
//     min3=min;
// }
// if(max2>max3){
//     max4=max2;
//     min4=max3;
// }else{
//     max4=max3;
//     min4=max2;
// }
// if(min2>min3){
//     console.log(min2);
// }else{
//    console.log(min3);
// }


//12. Write a program to take 8 numbers from the user and output the second max of these 8 numbers. (do this in 9 comparision)

// Test Case1:
// Input:
// 5
// 4
// 6
// 7
// 8
// 9
// 2
// 3
// const input =require('readline-sync')
// let a = input.questionInt("enter a ");
// let b = input.questionInt("enter b ");
// let c = input.questionInt("enter c ");
// let d = input.questionInt("enter d ");
// let e = input.questionInt("enter e ");
// let f = input.questionInt("enter f ");
// let g = input.questionInt("enter g ");
// let h = input.questionInt("enter h ");
// if(a>b){
//     max=a;
//     min=b;
// }else{
//     max=b;
//     min=a;
// }
// if(c>d){
//     max1=c;
//     min1=d;
// }else{
//     max1=d;
//     min1=c;
// }
// if(e>f){
//     max2=e;
//     min2=f;
// }else{
//     max2=f;
//     min2=e;
// }
// if(g>h){
//     max3=g;
//     min3=h;
// }else{
//     max3=h;
//     min3=g;
// }
// if(max>max1){
//     max4=max;
//     min4=max1;
// }else{
//     max4=max1;
//     min4=max;
// }
// if (max2>max3){
//     max5=max2;
//     min5=max3;
// }else{
//     max5=max3;
//     min5=max2;
// }
// if(max4>max5){
//     max6=max4;
//     min6=max5;
// }else{
//     max6=max5;
//     min6=max4;
// }
// if(min>min1){
//     max7=min;
//     min7=min1;
// }else{
//     max7=min1;
//     min7=min;
// }
// if(min2>min3){
//     max8=min2;
//     min8=min3;
// }else{
//     max8=min3;
//     min8=min2;
// }
// if(max7>max8){
//     max9=max7;
//     min9=max8;
// }else{
//     max9=max8;
//     min9=max7;
// }
// if(max9>min6){
//     console.log(max9);
// }else{
//     console.log(min6);
// }


////13.Write a program to check if a number is a special type of number called a 'prime number'. A prime number is a number that is only divisible by 1 and itself, and it doesn't have any other factors.
// For example, the number 7 is a prime number because it can only be divided by 1 and 7 without leaving a remainder. However, the number 12 is not a prime number because it has other factors, such as 2, 3, 4, and 6, in addition to 1 and 12. (Take the number from the user)? Learn sieve algorithm

// Test Case1:
// Input:
// 97
// Output:
// Yes

// Test Case2:
// Input:
// 49
// Output:
// No
// const Input = require('readline-sync')
// let n = Input.questionInt("enter n ");
// let i=1;
// let c=0;
// while(i<=n){
//     if(n%i==0){
//         c++;
//         i++;
//     }else{
//         i++;
//     }
// }
//  if(c==2){
//     console.log(n ,'prime number');
//  }else{
//     console.log(n ,'not prime number')
//  }


/////14.Write a program to take 5 numbers from the user and print the frequency of every number.

// Test Case1:
// Input:
// 3
// 4
// 6
// 3
// 6

// Output:
// 3 = 2
// 4 = 1
// 6 = 2



