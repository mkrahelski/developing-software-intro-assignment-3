//^above is a test. Unsure how to use sourcemap.
import { SourceMap } from 'module';
import { Houses  } from '../house/houses'
import { buildWall } from '../wallCalculator/index'
import { House } from '../house';





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



const house = Houses.create("Unsure of how to actually have any inputs here if yargs doesn't work.");
house.width = 96;   
house.length = 56;
Houses.save( house );





//do I need a string as a parameter.
const savedHouses = Houses.getAll(); //not sure how to actuate this effecitvely.


//? is this the extraction, like I need to extract this out of an array? set a filter????????
const houses:House[] = [ ...savedHouses.values()];


