import fs = require("fs");
import { IHouse, IHouseProperties, IWallCalculatorResponse } from "./interface";
import { House } from ".";

export class Houses extends Map<string, IHouse> {
    private static data = {
        path: `${__dirname}/../data`,
    };

    private static calculator: (
        inches: number
    ) => IWallCalculatorResponse = function (): IWallCalculatorResponse {
        return {
            posts: 0,
            studs: 0,
            plates: 0,
        };
    };

    public static setWallSuppliesCalculator(
        calculator: (inches: number) => IWallCalculatorResponse
    ): void {
        this.calculator = calculator;
    }

    private static getSaveLocation(): string {
        if (!fs.existsSync(Houses.data.path)) {
            fs.mkdirSync(Houses.data.path);
        }

        return Houses.data.path;
    }

    public static getAll(): Houses {
        const dataFolder = this.getSaveLocation();
        const contents: fs.Dirent[] = fs.readdirSync(dataFolder, {
            withFileTypes: true,
        });

        const houseData: IHouseProperties[] = contents.map(
            (file: fs.Dirent): IHouseProperties => {
                const json = fs.readFileSync(`${dataFolder}/${file.name}`, {
                    encoding: "utf-8",
                });
                return JSON.parse(json);
            }
        );

        const houses = new Houses();
        houseData.forEach((houseData: IHouseProperties) => {
            const house = new House(this.calculator, houseData);
            houses.set(house.name, house);
        });

        return houses;
    }

    public static create(name: string): House {
        const house = new House(this.calculator);
        house.name = name;
        return house;
    }

    public static save(house: House): void {
        const data = {
            name: house.name,
            width: house.width,
            length: house.length,
            posts: house.posts,
            plates: house.plates,
            studs: house.studs,
        };

        fs.writeFileSync(
            `${Houses.getSaveLocation()}/${house.name}.json`,
            JSON.stringify(data, null, 4),
            { encoding: "utf-8" }
        );
    }
}
