// types.ts

 type GeoLocation = {
    lat: string;
    lng: string;
};

 type CompanyInfo = {
    name: string;
    catchPhrase: string;
    bs: string;
};

 type Address = {
    city: string;
    geo: GeoLocation;
    street: string;
    suite: string;
    zipcode: string;
};

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: CompanyInfo;
};
