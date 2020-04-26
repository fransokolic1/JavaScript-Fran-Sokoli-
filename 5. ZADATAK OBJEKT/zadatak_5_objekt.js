
function Person (name,age){
    this.name=name;
    this.age=age;
}

var ageDifference = function(person1,person2){
    return person1.age-person2.age;
};

function olderAge(aliceAge,billyAge){
    if(aliceAge.age>billyAge.age){
        return aliceAge.age;
    }
    else if(aliceAge.age<billyAge.age){
        return billyAge.age;
    }
    else return billyAge.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);
console.log("The older person is " + olderAge(alice, billy));