// import yargs to re-use code from someone else that has already 
// solved the complexities of parsing command line arguments
import yargs = require('yargs');
import { calcWoodNeeded } from './commands/calc-wood-needed';
import { memeWoodNeeded } from './commands/calc-wood-needed'; //export responsible for NameCreation
import { Houses } from '../src/house/houses'
import { House } from '../src/house';

import { SourceMap } from 'module';
import { buildWall } from './wallCalculator/index'


memeWoodNeeded( yargs ); //probably creates houses. OR so the theory goes.

//works to enter a name doens't actually do anything.
//technically it does add a name to the command 




calcWoodNeeded( yargs ); //calculates wood

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();





/* 

I have tried a lot to get the below to work
But as it errors out some of the code. It's blocked as of now.



Houses.setWallSuppliesCalculator(( inches: number) => {


    let x = buildWall(inches); 
    console.log(x);
    return {
        posts: 0, // set this value
        studs: 0, // set this value
        plates: 0 // set this value
    }

});

//I found no way to parametrize the "String" with a variable present in another function instead,
//isolated in a yargs parameter. But without it's adjacent code it doesn't execute correctly.

const house = Houses.create("String.");
house.width = 96;   
house.length = 56;
Houses.save( house );





//do I need a string as a parameter.
const savedHouses = Houses.getAll(); //not sure how to actuate this effecitvely.


//? is this the extraction, like I need to extract this out of an array? set a filter????????
// const houses:House[] = [ ...savedHouses.values()];
//the above line seems to be perpetually broken.


*/