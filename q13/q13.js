class Car { //beginning of class 
    // creating a new class called Car
    constructor(brand) { //beginning of constructor object
        // special method of a class used to create and intialise an object instance of the class is it called on
        // constructor allows you to provide a custom initilisation that must be done before any other methods are called on said instantiated object
      this.carname = brand;
      // "this" keyword has many use cases, in this case it refers to the object we created and is declaring the value of the parameter we passed to the constructor (brand)
    } // end of constructor object
    present() {  //beginning of present function
      //this function, defined using shorthand, is used to return a string with an interpolated value.
      return 'I have a ' + this.carname; // here we are interpolating a string with the carname property (value of that property) referenced by "this".
    } // end of present function
  } //end of class
  
  class Model extends Car { //beginning of child class
    // the extends keyword is used to create a child class of another class (the other class is reffered to as the parent class). The child class inherits all methods from the parent class. In this case, Model = Child and Car = Parent.
    constructor(brand, mod) { //beginning of constructor 
      // again, a constructor allows you to provide a custom initilisation that must be done before any other methods are called. In other words, initialisation of the object (class) we created. This constructor takes 2 parameters, "brand" and "mod".
      super(brand); //super keyword is used to gain access to properties (object literal properties or class's prototype). Super is also used to avoid duplication of constructor properties that are shared between parent and child.
      this.model = mod; //the "this" keyword is now referencing the child object "Model". On this line, we are declaring mod as the value of the "model" property
    } // end of constructor 
    show() { //beginning of show function
      //this is another function defined using shorthand (like the present() function spoken about earlier.) Here, we have string concatination and interpolated values. Note we are invoking the present() function here as well.
      return this.present() + ', it was made in ' + this.model; //since we used the super keyword a few lines back, we have access to the parents properties. As such, we can access the present() function and combine it with the function we are declaring on this line.
    } //end of show function
    // The return value of this line is: "I have a ** insert car.name**, it was made in ** insert model."
  } //end of child class
  
  let makes = ["Ford", "Holden", "Toyota"] // This is an array named "makes". It has 3 elements.
  let models = Array.from(new Array(40), (x,i) => i + 1980) // the array.from() static method creates a new array instance from an array or iterable. We specify that the models array will create a new array containing 40 elements. We also create a counter using i as the incrementer. i = 1, so every incrementation is 1, beginning from 1980. 
  // The purpose of the models array is to create elements that represent years. This is needed for when we are returning the model of a car (as seen with previous interpolated strings (functions)) so that the car has a year that is was made in.
  
  // here we are defining another function. This function takes 2 paremeters, those being "min" and "max" respectively.
  function randomIntFromInterval(min,max) { // min and max included
      return Math.floor(Math.random()*(max-min+1)+min); // Math.floor() always rounds down and returns the largest integer that is less than or equal a given number. Math.random() returns a psuedo random number (not actually random + the number returned is a floating point). When used in conjunction, math.random will select a floating point number between max and min (not including the number that represents max. ie max = 20, min = 0 == highest possible value = 19). After math.random returns its selected floating point number, math.floor will round this number down and return a whole number. So, where math.random returns 1.9, math.floor rounds down to 1.
  } // additionally, since math.random can return 0 as the lowest possible selected value and 0.9999 recurring is the highest possible value, we need to make adjustments for this to ensure our original range is not affected (such as the highest number being excluded from the range). To do this, we take the number selected by math.random and multiply (*) it by (max-min+1)+ min). This means that if math.random selects the highest number it can for the provided range, (contuing from previous example where max = 20 and min = 0) 19.99999...; (max-min+1)+min will bring that number up to 20.9999... before math.floor rounds it to 20. 
  //Although the method it utilises is complicated, all it is doing is ensuring the maximum value possible is equal to the value defined as the max of the range. So if max = 20, we can still return that as a value. Without this calculation, our highest possible value for a range of 20 would 19.


  for (model of models) { //beginning of for loop
    //earlier, we declared a new Array with 40 elements as the value of models. Here, we are implementing a for loop to iterate over elements in that array.
  
    make = makes[randomIntFromInterval(0,makes.length-1)] //here we are using the randomIntFromInterval function to generate a number. We have declared the range for the number to be selected from as min = 0 and max = length of the array - 1. The array it is searching contains 3 elements. Those elements will be listed against 3 index positions, being 0,1 and 2. In order for the number generated to accurately reflect the index position of these elements, we deduct 1 from the array lenght. To simplify, the lenght of the array is 3 although indexes only go up to 2 since we include 0. The selected element, moreso the value of the selected element will be stored in the "make" variable.


    model = models[randomIntFromInterval(0,makes.length-1)] //like above, we are again using the randomIntFromInterval function to generate a number. the same rules apply here regarding array length vs index positions. the only differences here are the variable name we are assinging the value to and the array we are accessing.
  
    mycar = new Model(make, model);  //new model creates another instance of the child class named model. we pass 2 parameters called make and model. This new instance will be stored as the value of the variable named mycar. to summarise, we now have a new instance of an object stored in the mycar variable. This instance will have a make and a model which will be assigned via the make and model variables.

    //summary: make and model variables choose and element from their respective arrays. those values are taken and passed as parameters into the new model instance.

    console.log(mycar.show()) //here we are console.logging our mycar instance. Note we are invoking the show function which returns a string with interpolated values.
  } //end of for loop

  // what is returned from the for loop? This: "I have a car" + x, "it was made in" + y
  //in the above line, x represents a random make and y represents a model 


// references:
// constructor reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
// this reference: https://www.w3schools.com/js/js_this.asp
// super reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
// array.from() reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//math.floor() reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
//math.random() reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// (max-min+1)+min reference:  https://www.codecademy.com/forum_questions/5020be4d3a51800002015ebe
// (max-min+1)+min reference:  https://stackoverflow.com/questions/62981108/how-does-math-floormath-random-max-min-1-min-work-in-javascript#:~:text=Math.-,floor(Math.,%5B%20myMin%20%2C%20myMax%20%2B%201)


