class Phone {
    phonecode;
    name;
    manufacturer;
    prices;

    constructor(phonecode, name, manufacturer, prices) {
        this.phonecode = phonecode;
        this.name = name;
        this.manufacturer = manufacturer;
        this.prices = prices;
    }
    get phonecode() {
        return this.phonecode;
    }
    set phonecode(value) {
        this.phonecode = value;
    }
    get name() {
        return this.name;
    }
    set name(value) {
        this.name = value;
    }
    get manufacturer() {
        return this.manufacturer;
    }
    set manufacturer(value) {
        this.manufacturer = value;
    }
    get prices() {
        return this.prices;
    }
    set prices(value) {
        this.prices = value;
    }
    toString() {
        return `Phone Details:`+
            `Phonecode: ${this.phonecode}`+
            `Name: ${this.name}`+
            `Manufacturer: ${this.manufacturer}`+
            `Prices: ${this.prices}`;
    }
}
let myPhone = new Phone("13", "Iphone 13", "Iphone", "9$");
console.log(myPhone.toString());