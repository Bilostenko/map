import { faker } from '@faker-js/faker';


export class User {
    name: string;
    location: {
        lat: number,
        lng: number
    }

    constructor() {
        this.name = faker.person.firstName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }

    markerContent(): string {
        return `
        <div>
       <h1> Name: ${this.name} </h1>
        </div>
        `
    }
}

