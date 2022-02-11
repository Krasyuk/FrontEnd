abstract class Figure<T extends Number> {
    abstract getArea(): T;
}

interface IPerimeter {
    getPerimeter() : void;

}

class Rectangle extends Figure<Number> implements IPerimeter{
     
    constructor(public width: number, public height: number){ 
        super();
    }

    infoAboutFigure(){

    }
     
    getArea(): Number{
        let square = this.width * this.height;
        return square;
    }

    getPerimeter(){
        
        console.log((this.width + this.height) * 2);
    }

    outputArea() : void{

        console.log("area = " + this.getArea());
    }
}
 
let someFigure = new Rectangle(20, 30)
someFigure.outputArea();
someFigure.getPerimeter();