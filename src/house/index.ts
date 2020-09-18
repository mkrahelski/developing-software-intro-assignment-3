import { IHouse, IWallCalculatorResponse, IHouseProperties } from "./interface";

export class House implements IHouse {
    public name: string;
    private _width = 0;
    private _length = 0;

    private widthMaterials: IWallCalculatorResponse;
    private lengthMaterials: IWallCalculatorResponse;

    set width(inches: number) {
        this._width = inches;
        this.calculateMaterials();
    }

    get width(): number {
        return this._width;
    }

    set length(inches: number) {
        this._length = inches;
        this.calculateMaterials();
    }

    get length(): number {
        return this._length;
    }

    get posts(): number {
        return (this.widthMaterials.posts + this.lengthMaterials.posts) * 2;
    }

    get studs(): number {
        return (this.widthMaterials.studs + this.lengthMaterials.studs) * 2;
    }

    get plates(): number {
        return (this.widthMaterials.plates + this.lengthMaterials.plates) * 2;
    }

    constructor(
        private calculator: (inches: number) => IWallCalculatorResponse,
        data?: IHouseProperties
    ) {
        if (data) {
            Object.assign(this, data);
        }
    }

    private calculateMaterials() {
        console.log("Calculating...");
        this.widthMaterials = this.calculator(this.width);
        this.lengthMaterials = this.calculator(this.length);
    }
}
