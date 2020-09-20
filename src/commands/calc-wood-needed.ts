import { Arguments, Argv } from "yargs";
import { calculateHouseRequirements } from "../wallCalculator";

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

            inches: {
                type: "string",
                alias: "I",
                description: "Declaration of units 'inches'.",
            },

            feet: {
                type: "string",
                alias: "F",
                description: "Declaration of units 'feet'.",
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
                inches: string;
                feet: string;
                I: string;
                F: string;

            }>
        ) 
        




    //seperate function or do I put it into calculate house req.
    // might need to read more in depth through it.

    //I think I found the pain point. need to inject the string.


        {          
            const requirements = calculateHouseRequirements(
                args.width,
                args.length,
                args.inches,
                args.feet,
            );

            console.log( requirements );
        }
  
  
        );
}
