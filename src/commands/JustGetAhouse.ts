import { Houses  } from '../house/houses'
import { buildWall } from '../wallCalculator/index'

//to have imports of paramesters, and the right flags, we might need a new yargs function that mirrors the previous.
//one to set the.

// example with anonymous function
Houses.setWallSuppliesCalculator(( inches: number) => {


    let x = buildWall(inches); 
    console.log(x);
    return {
        posts: 0, // set this value
        studs: 0, // set this value
        plates: 0 // set this value
    }

});

                        
//string parameter? //And I have to input a string parameter.


//if input string. into String slot? make new function with a yargs parameter. And mirror what was done earlier?
//New flags?
    //I don't think I necessarily need a function though I suppose there is no reason why it can't be one.


const house = Houses.create("Bradley"); // so when I went back to look at the class it did create a house.
house.width = 96;
house.length = 56;
Houses.save( house );
//meaning this function when we run save the house? Which house? Am I suppose to import the parameters?
//I mean I think I can do that O_o Probably?



//do I need a string as a parameter.
const savedHouses = Houses.getAll(); //not sure how to actuate this effecitvely.


//?
const houses:House[] = [ ...savedHouses.values()];



/*Converting a Houses object to an array:

// example from locatation relative to src/index.ts
import { Houses } from './house/houses'

const savedHouses = Houses.getAll();
const houses:House[] = [ ...savedHouses.values()];
*/



/*
// example from locatation relative to src/index.ts
import { Houses } from './house/houses'

const house = Houses.create("Bradley");
house.width = 96;
house.length = 56;
Houses.save( house );

this saves house ??/
*/