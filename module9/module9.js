function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;
    
    Object.defineProperty(this, 'fullName', {
        get: function(){
            return this.firstName + " " + this.lastName;
        },
        set: function(value){

            const initials = value.split(" ");
            if (initials.length >= 2) {
              this.firstName = initials[0];
              this.lastName = initials[1]
            }
            
        }
    });  
}


var namedOne = new NamedOne("Naomi", "Wang");

console.log(namedOne.firstName);
console.log(namedOne.lastName);
console.log(namedOne.fullName);

namedOne.firstName = "John"
console.log(namedOne.firstName);

namedOne.lastName =	"Doe"
console.log(namedOne.lastName);
console.log(namedOne.fullName);

namedOne.fullName = "Bill Smith";
console.log(namedOne.firstName);
console.log(namedOne.lastName);

console.log(namedOne.fullName = "Tom");
//console.log(namedOne.fullName = "TomDonnovan")