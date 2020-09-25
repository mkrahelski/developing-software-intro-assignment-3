import yargs = require('yargs');
import { memeWoodNeeded } from './calc-wood-needed'; 
//^above is a test. Unsure how to use sourcemap.
import { SourceMap } from 'module';
import { Houses  } from '../house/houses'
import { buildWall } from '../wallCalculator/index'
export {  } from './JustGetAhouse'


//to have imports of paramesters, and the right flags, we might need a new yargs function that mirrors the previous.
//one to set the.

// example with anonymous function
//so set this value might be set this as a parameter. Using other paramters.  these can be inputted parameters

//create another yargs parameter thing for the set wall supplies calc but wait where are the inches coming from
//So we put inches in we get wall? 

//feed it wall width/length in inches?



// node.js JustGetAHouse
//add yargs here? or import in the inputs.
Houses.setWallSuppliesCalculator(( inches: number) => {


    let x = buildWall(inches); 
    console.log(x);
    return {
        posts: 0, // set this value
        studs: 0, // set this value
        plates: 0 // set this value
    }

});



const house = Houses.create("Well this is eggcelent");
house.width = 96;   
house.length = 56;
Houses.save( house );





//do I need a string as a parameter.
const savedHouses = Houses.getAll(); //not sure how to actuate this effecitvely.


//? is this the extraction, like I need to extract this out of an array? set a filter????????
const houses:House[] = [ ...savedHouses.values()];


