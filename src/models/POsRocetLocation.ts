
export interface PosRocketLocation {
    id: string;
    name: string;
    tax_number: string;
    phone: string;
    address: string;
}

export interface PosRocketLocationList {
    count: number;
    next?: any;
    previous?: any;
    data: PosRocketLocation[];
}


