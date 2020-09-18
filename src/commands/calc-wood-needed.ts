import { Arguments, Argv } from "yargs";
import { calculateHouseRequirements } from "../wallCalculator";

export function calcWoodNeeded(yargs: Argv): void {
    // create a new yargs "command"
    yargs.command(
        // yargs.command paramater #1
        // name the command with no spaces
        // this will be the first parameter we send:
        // format:  node dist/index.js [command]
        // example: node dist/index.js calc-wall-studs
        "calc-wood-needed",

        // yargs.command paramater #2
        // describe the command so that the --help flag is helpful
        "Calculate the number of studs required to stick frame a house for Gerald",

        // yargs.command paramater #3
        // define the parameters we need for our command
        {
            // format:  node dist/index.js [command] --[parameter] [value]
            // example: node dist/index.js calc-wall-studs --width 8
            width: {
                // format:  node dist/index.js [command] --[parameter] [value must be number]
                // example: node dist/index.js calc-wall-studs --width 8
                type: "number",

                // format:  node dist/index.js [command] -[parameter] [value]
                // example: node dist/index.js calc-wall-studs -w 8
                alias: "w",

                // this adds the description for the --help flag
                description: "The width of the house",
            },

            // format:  node dist/index.js [command] --[parameter] [value] --[parameter] [value]
            // example: node dist/index.js calc-wall-studs --width 8 --legth 8
            length: {
                type: "number",
                alias: "l",
                description: "The length of the house",
            },
        },

        // yargs.command parameter #4
        // define the function we want to run once the arguments are parsed
        // the parsed arguments will be provided via the first paramater passed in
        // we've called it 'args' in this function
        function (
            args: Arguments<{
                width: number;
                length: number;
                w: number;
                l: number;
            }>
        ) {
            // ----------------------------------------------------------------------------------- |
            // NOTE TO STUDENTS:                                                                   |
            // This is where you write your application with access to the command line arguments  |
            // ----------------------------------------------------------------------------------- |
            const requirements = calculateHouseRequirements(
                args.width,
                args.length
            );

            // inspect the output to infer how you might access the arguments
            console.log(requirements);
        }
    );
}
