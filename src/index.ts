// import yargs to re-use code from someone else that has already 
// solved the complexities of parsing command line arguments
import yargs = require('yargs');
import { calcWoodNeeded } from './commands/calc-wood-needed';
import { memeWoodNeeded } from './commands/calc-wood-needed';
import { Houses } from '../src/house/houses'


//yargs thing is fundumentally imported here. Export of main function goes here.
//Function that actually does the stuff is imported into yargs, and then those parameters set by args go into func.
//there is a 3 step exchange.


const house = Houses.create("Bradley"); 


memeWoodNeeded( yargs );



calcWoodNeeded( yargs );

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();