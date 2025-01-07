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

    markerContent(): string {
        return `
        <div>
       <h1> Company name: ${this.companyName} </h1>
       <h3> Phrase: ${this.cachPhrase}</h3>
       </div>
        `
    }
}
