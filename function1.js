function large(arr){
    let a = ""
    for(i=0;i<arr.length;i++){
        if(a.length<arr[i].length){
            a = arr[i]
        }
    }
    return a
}

let words = ["APPLE","BANANA","GRAPES","COCONUT"]
let result = large(words)
console.log(result);