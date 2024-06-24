import { action, makeObservable, observable } from "mobx";

const defulData = {
    name: "Ruth Kalish",
    address: "Yechezkel Koifman 1",
    phone: "0527671162",
    owner: "Ruth Kalish",
    description: "Architect,exterior design",
};
class BuisesDataStore {

    data = defulData;
    constructor() {
        makeObservable(this, {
            data: observable,
            setData: action,

        })
    }
    setData(data) {
        this.data = data;
    }


}




export default new BuisesDataStore();