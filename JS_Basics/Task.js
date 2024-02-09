/**Creating a class named Food which have a constructor which accept Data as an argument
 * a printClass() function which prints the data
 */

class Food {
    constructor(Data)
    {
        this.data = Data;
    }
    printClass(){
        console.log(`Food Item: ${this.data}`);
    }
}
//creating an object
let obj = new Food("Biryani");

//defining an array
let array = [
    new Food("Samosa"),
    new Food("Poha"),
    new Food("Dosa"),
    new Food("Idli"),
    new Food("Pizza"),
    new Food(3),
    new Food(3.1),
    new Food(null),
    new Food(undefined),
    new Food(false),
    new Food(123e5),
    new Food(2+6)
];

//calling the Food class method using its instance
obj.printClass();

// calliing the printClass() method in a forEach loop
array.forEach(obj => {
    obj.printClass();
  });
const { log } = require('console');
console.log("\n");
/*************************************************************************************************************************************************/

/**
 * Creating and Exploring a javascript object.
 */
//creating a function
console.log("EXPLORING OBJECTS");
function greet(name) {
    console.log(`Hello, ${name}!`);
  }

  //creating an object
  const myObject = {
    greetingFunction: greet
  };
  
  myObject.greetingFunction("Atharva"); 

/*************************************************************************************************************************************************/

/**
 * Can I perform CRUD operations on a file in javascript?
 * YES
 * performing CRUD operations in javascript.
 */
console.log("\n");
console.log("CRUD OPERATIONS");
const fs = require('fs');

//creating file
const create = 'Hello Javascript';
fs.writeFileSync('create.txt', create);
console.log('File created successfully.');

//reading file
const read = fs.readFileSync('create.txt', 'utf-8');
console.log(`Read data from file: ${read}`);

//updating file
const update = '\nHello World!';
fs.appendFileSync('create.txt', update);
console.log('File updated successfully.');

// deleting file
fs.unlinkSync('create.txt');
console.log('File deleted successfully.');
console.log("\n\n");
/**
 * Can I put a Object in a File?
 * YES 
 */
console.log("PUTTING OBJECT IN A FILE");
//creating a new Object
const object1={
    name : "Atharva",
    Age:21,
    Location: "Hyderabad"
}

// at First we need to convert the data into Json
const json = JSON.stringify(object1);
//then Write it into object
fs.writeFileSync('objectFile.json', json);
console.log('Object written!');

const Content = fs.readFileSync('objectFile.json', 'utf-8');

//Again convert back into the original form
const final = JSON.parse(Content);
// print the object
console.log('Object retrieved from file:', final);