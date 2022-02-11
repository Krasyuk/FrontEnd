const myNew = (Class, ...params) =>{
    return new Class(...params);
}


function Person(name,age){
    this.name =	name;
	this.age = age;

    Person.prototype.introduce = function(){
	return	'My name is ' + this.name +	' and I am '	+	this.age };

}

var john = myNew(Person, "John", 30)
var jack = myNew(Person, "Jack", 40)

console.log(john.introduce())
console.log(jack.introduce())




