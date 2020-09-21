export interface IWallCalculatorResponse {
    posts: number;

    studs: number;

    plates: number;
}

export interface IHouseProperties {
    name: string;

    width: number;

    length: number;
}

export interface IHouseMaterials {
    posts: number;

    studs: number;

    plates: number;
}

export interface IHouse extends IHouseProperties, IHouseMaterials {}

//re-examine, to incorp the string parameters
