class PersonError extends Error {
    constructor(value, ...params) {
     
      super(...params)
      this.name = "PersonError"
      this.argument = value;
    }
  }
   
  class Person{
    
      constructor(pName, pAge){
           
          const age = parseInt(pAge);
          if(isNaN(age))  throw new PersonError(pAge, "Возраст должен представлять число");
          if(age < 0 || age > 120) throw new PersonError(pAge, "Возраст должен быть больше 0 и меньше 120");
          this.name = pName;
          this.age = age;
      }
      print(){ console.log(`Name: ${this.name}  Age: ${this.age}`);}
  }
       
  try{
      const tom = new Person("Tom", -45);
      
  }
  catch(error){   
      if (error instanceof PersonError) {
          console.log("Ошибка типа Person. Некорректное значение:", error.argument);
      }
      console.log(error.message);
  }