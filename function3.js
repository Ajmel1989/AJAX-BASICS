function sum(arr){
    let a = 0
    for(i=0;i<arr.length;i++){
        a = a + arr[i].Salary
    }
    return a
}

let details = [{Name : "AJMEL",Salary : 45000},{Name : "SABITH",Salary : 20000},{Name : "NIHALA",Salary : 20000},
    {Name : "ABHISHEK",Salary : 20000},{Name : "FIDHA",Salary : 30000},
    {Name : "ANFAR",Salary : 40000}]


let result = sum(details)
console.log(sum(details));