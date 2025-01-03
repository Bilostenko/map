import { faker } from "@faker-js/faker";

export class Company {
    companyName: string;
    cachPhrase: string;
    location: {
        lat: number,
        lng: number
    }

    constructor() {
        this.companyName = faker.company.name(),
        this.cachPhrase = faker.company.catchPhrase(),
        this.location = {
                lat: faker.location.latitude(),
                lng: faker.location.longitude()
            }
    }
}
