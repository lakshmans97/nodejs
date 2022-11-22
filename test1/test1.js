let num=12;
console.log(num);
num++;
const a=22;
    var b=2222;
    var b=212;

console.log(a);
console.log(b);
console.log(num);
const arr=[22,44,'lakshman',455,'rams',565,'karthik'];
const arr1=[];
const arr2=[];
let j=0,k=0;
const typo=typeof(arr[0]);
console.log(typo);
for(let i=0;i<arr.length;i++)
{
    if(typeof(arr[i])==='number')
    {
        arr1[j]=arr[i];
        j++;
    }
    else
    {
        arr2[k]=arr[i];
        k++;
    }
}
console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(` ${arr[0]} is the first index value in arr`);
console.log(arr[5]+`  hii  `+arr[2]);
let max=arr1[0];
let min=arr1[0];
for(let i=0;i<arr1.length-1;i++)
{
    
    if(arr1[i]>max)
    {
      max=arr1[i];
    }
    else if(arr1[i]<min)
    {
        min=arr1[i];
    }
}
console.log(max+'  '+min);
const arr3=[3,44,2,31,11,556,65,55];
arr3.sort();
console.log(arr3);