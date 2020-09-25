import { Arguments, Argv } from "yargs";
import { calculateHouseRequirements } from "../wallCalculator";
import { Houses  } from '../house/houses'


//first wall hit
    //So in the case of the earlier function, in one functions time 



export function memeWoodNeeded(yargs:Argv):void {
//so in theory we export meme wood needed. Which has flags for name. And flags for extracting name?

    yargs.command(

        "saving-this-house", 
        //nom

        "Creates house",
        
        {
            fullName: {
                type: "string",
                alias: "n",
                description: "Declaration of fullname.",
            },
        },

        // define the function we want to run once the arguments are parsed
        function (
            args: Arguments<{
             //added
             //so do I need to list them both, alias/parameter??
               n: string;
               fullName: string;

            }>
        ) 
        

//yargs export 
            //+ a secoundary that eats the parameters


    //seperate function or do I put it into calculate house req.
    // might need to read more in depth through it.

    //I think I found the pain point. need to inject the string.


        {          //hmmmm, so everything in that function runs via parameters here? but also there, but not all of it...
            const requirements = Houses.create(
                args.fullName
                //le parameters, and const requirements is just extracting what the reqs are? if inputted? or default?
                //so contexually not worth caring about. Just makes it harder to look out comprehensively.    
            );
                
            console.log( requirements );
        }
  

    );
}



//------------------------------------------------------------------------------------------------------



export function calcWoodNeeded(yargs: Argv): void {
    
    // create a new yargs "command"
    yargs.command(
        
        // name the command with no spaces
        "calc-wood-needed",

        // describe the command so that the --help flag is helpful
        "Calculate the number of studs required to stick frame a house for Gerald",

        // define the parameters we need for our command
        {
            width: {
                type: "number",
                alias: "w",
                description: "The width of the house",
            },

            length: {
                type: "number",
                alias: "l",
                description: "The length of the house",
            },

            units: {
                type: "string",
                alias: "u",
                description: "Declaration of units units.",
            },

            





        },

        // define the function we want to run once the arguments are parsed
        function (
            args: Arguments<{
                width: number;
                length: number;
                w: number;
                l: number;
             //added
             //so do I need to list them both, alias/parameter??
               u: string;
               units: string;

            }>
        ) 
        




    //seperate function or do I put it into calculate house req.
    // might need to read more in depth through it.

    //I think I found the pain point. need to inject the string.


        {          
            const requirements = calculateHouseRequirements(
                args.width,
                args.length,
                args.units
            );

            console.log( requirements );
        }
  
  
        );
}
