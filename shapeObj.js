//Your code

let Rectangle = {
    length: 15,
    wide: 18,
} 
periminter: function(){
    let p = 2*this.length + 2*this.wide;
    return p;
}

area: function(){
    let a = this.length*this.wide
    return a;
}
let Square = {
    sidelength: 4,
    width: 4,
}
periminter: function(){
    let p = 2*this.length + 2*this.wide;
    return p;
}
area: function(){
    let a = this.length*this.wide
    return a;
}
let Circel ={
    radius: 7
}
area: function(){
   let a = Math.PI*radius*radius
   return a
}




//Dont forget about box and sphere
let box={
    l= 7
    w= 7
    h= 7
}
    



//------------------------------------------------
//copy paste test code when you finish under here
function test(){

    console.log(`------ Rectangle Stuff ------`);
    console.log(`sides = ${Rectangle.length} by ${Rectangle.width}`);
    console.log(`perimeter = ${Rectangle.perimeter()}`);
    console.log(`area = ${Rectangle.area()}\n`);
    
    console.log(`------ Square Stuff ------`);
    console.log(`side length = ${Square.sideLength}`);
    console.log(`perimeter = ${Square.perimeter()}`);
    console.log(`area = ${Square.area()}\n`);
    
    console.log(`------ Circle Stuff ------`);
    console.log(`radius = ${Circle.radius}`);
    console.log(`circumference = ${Circle.circumference()}`);
    console.log(`area = ${Circle.area()}\n`);
    
    console.log(`------ Box Stuff ------`);
    console.log(`sides = ${Box.length} by ${Box.width} by ${Box.height}`);
    console.log(`perimeter = ${Rectangle.surfaceArea()}`);
    console.log(`area = ${Rectangle.volume()}\n`);
    
    console.log(`------ Sphere Stuff ------`);
    console.log(`radius = ${Sphere.radius}`);
    console.log(`circumference = ${Sphere.surfaceArea()}`);
    console.log(`area = ${Sphere.volume()}\n`);
    
    }
    test();
    