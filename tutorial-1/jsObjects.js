var cust1  = {
    name:'anand',
    age: 30
}

var cust2 = new Object();
cust2.name = "rajani";
cust2.id="232";
cust1.salary = 20000;
console.log(cust1);
console.log(cust2);

var cust3 = {}
cust3.name='anand Pandey'
cust3.age=31;
console.log(cust3)

function Customer(name1, age1){
        this.name = name1,
        this.age = age1
    }
    var customer1 = new Customer("ruchi", 27);
    customer1.id= 23242;
    console.log(customer1)                       


    for(var  i=0; i<5;i++)
    {
        var n=i;
        n++;
    console.log("i "+ i);
    console.log("n "+n)
    console.log("-----------------")
    }
console.log(i);
console.log(n)

/*
(function () {
    console.log("hello test");
}());
*/

