function sum(arr){
    let a = 0
    for(i=0;i<arr.length;i++){
        a = a + arr[i].Salary
    }
    return a
}

let details = [{Name : "SABITH",Salary : 20000},{Name : "NIHALA",Salary : 20000},
    {Name : "ABHISHEK",Salary : 20000},{Name : "FIDHA",Salary : 30000},
    {Name : "ANFAR",Salary : 40000},{Name : "SALAH",Salary : 30000},{Name : "APARNA",Salary : 20000}]


let result = sum(details)
console.log(result);