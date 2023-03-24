//Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null

function mergeSortTopDown(num1){
    if(num1.length<=1){
        return num1
    }
    const middle=Math.floor(num1.length/2)
    const left=num1.slice(0,middle)
    const right=num1.slice(middle)
    return mergeTopDown(mergeSortTopDown(left),mergeSortTopDown(right))
}
function mergeTopDown(left,right){
    const num4=[];
    while(left.length && right.length ){
        if (left <=right) {
        num4.push(left.shift())
    }
    else{
        num4.push(right.shift())
    }
    return num4.concat(left.slice()).concat(right.slice())
}

}
function binary(num4,target){
let left=0;
    let right =num4.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if (num4[middle] ===target){
            return middle
        }
        else if(num4[middle]< target){
            left=middle + 1;

        }
        else{
            right= middle - 1;
        }
    }
    return null
    }
    let num1 = [45,12,6,89,2,5]

        let num4=mergeSortTopDown(num1)
let target=6;
console.log(binary(num4,target))



//Given an unsorted array of numbers return the sorted array in descending order


let arr1=[123,89,5,23,9,56];
let arr2=arr1.sort(function( a,b){
    return a-b
})
console.log(arr2.reverse())


//Given the following array, search for the following target



function mergeSortTopDown(arr4){
    if(arr4.length<=1){
        return arr4
    }
    const middle=Math.floor(arr4.length/2)
    const left=arr4.slice(0,middle)
    const right=arr4.slice(middle)
    return mergeTopDown(mergeSortTopDown(left),mergeSortTopDown(right))
}
function mergeTopDown(left,right){
    const arr6=[];
    while(left.length && right.length ){
        if (left <=right) {
        arr6.push(left.shift())
    }
    else{
        arr6.push(right.shift())
    }
    return arr6.concat(left.slice()).concat(right.slice())
}

}
function binary(arr6,target){
let left=0;
    let right =arr6.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if (arr6[middle] ===target){
            return middle
        }
        else if(arr6[middle]< target){
            left=middle + 1;

        }
        else{
            right= middle - 1;
        }
    }
    return null
    }
    let arr4 = [1,4,78,2,67,3];
    let array=mergeSortTopDown(arr4)
let target3=34;
console.log(binary(array,target3))
