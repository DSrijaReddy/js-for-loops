// 1.Create a for loop to print the squares of numbers from 1 to 10.

for(s=1;s<=20;s++){
console.log(s);
}

// 2.Create a for loop to print the squares of numbers from 1 to 10.

for(s=1;s<=10;s++){
    console.log(s*s);
}

// 3.Use a for loop to print the first 10 multiples of 5.

for(s=1;s<=10;s++){
    console.log(s*5);
}
// 4.Write a for loop to print numbers from 20 to 1 in reverse order.
for(s=20;s>=1;s--){
    console.log(s);
}
// 5.Create a for loop to print the first 10 even numbers in reverse order (e.g., 20, 18, 16, …).
for(s=20;s>=2;s-=2){
    console.log(s);
}
// 6.	Print each element of the array
// –	Input: [10, 20, 30, 40, 50]

// 	Expected Output:
// 10 
// 20  
// 30  
// 40  
// 50  

var arr=[10, 20, 30, 40, 50];
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// 7.	Print the index of each element along with its value
// –	Input: ['apple', 'banana', 'cherry']

// –	Expected Output:
//  	Index 0: apple  
//      Index 1: banana  
//      Index 2: cherry  

var arr=['apple', 'banana', 'cherry'];
for(s=0;s<arr.length;s++){
    console.log('index'+s+':'+arr[s]);
   
}


