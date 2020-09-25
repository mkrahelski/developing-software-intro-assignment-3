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
Houses.setWallSuppliesCalculator(( inches: number) => {


    let x = buildWall(inches); 
    console.log(x);
    return {
        posts: 0, // set this value
        studs: 0, // set this value
        plates: 0 // set this value
    }

});
//can I set the above using parameters derived from another function???????????

//my head had it a bit backwards we are importing into that yargs folder outside in, toook me a while.

                        
//string parameter? //And I have to input a string parameter.


//if input string. into String slot? make new function with a yargs parameter. And mirror what was done earlier?
//New flags?
    //I don't think I necessarily need a function though I suppose there is no reason why it can't be one.


//so these are neat. Because it seems like they work.
    //That is to say they work for this specific house.
    //paramters in theory sohuld be able to actualize these specific parameters.



    
    //is it fine to have x as just a string an outptu x?

//amazing 
/*
const house = Houses.create();

//create is a function
// i don't often describe code as jerry rigging, but it seems like the above




//are the properties set below following sequentially to basicall set the house. 

// so when I went back to look at the class it did create a house.
//say it's not bradley but a thing we set earlier that = string for fullname flag FirstName_LastName

house.width = 96;   //Using length parameters. Which possible begs a question if I am building two seperate routines.
//Can I use the previous? I don't think so, because the units thing is muddled. Unless I build out a new function here?
//techically speaking I can build out the addition of units. But doesn't that complicate things?
house.length = 56; // I think I should also set these two. // technically speeaking an if flag can exist apriori
//but i'd rather get it to work on it's own two feet.
Houses.save( house );

// we have different flags, different functions?


//meaning this function when we run save the house? Which house? Am I suppose to import the parameters?
//I mean I think I can do that O_o Probably?



//do I need a string as a parameter.
const savedHouses = Houses.getAll(); //not sure how to actuate this effecitvely.


//? is this the extraction, like I need to extract this out of an array? set a filter????????
const houses:House[] = [ ...savedHouses.values()];

