function mutiple(arr){
    let a = 0
    for(i=0;i<arr.length;i++){
        if(arr[i]%4===0){
            a = a + arr[i]
        }
        else{
            a = a 
        }
    }
    return a
}

let nums = [16,8,4,5,8,9]
let result = mutiple(nums)
console.log(result)