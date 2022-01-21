export class Customer {
    #name;

    constructor(name) {
        if (typeof name === "string") {
            this.#name = name;
        }

    }

    getName() {
        return this.#name;
    }

}