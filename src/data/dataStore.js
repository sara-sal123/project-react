import { action, makeObservable, observable } from "mobx";


class DataStore {
    isLogin = false;

    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin: action,

        })
    }
    setIsLogin(status) {
        this.isLogin = status;
    }


}




export default new DataStore();

export const defaultBusiness = {
    name: "Coding Academy",
    address: "Rothschild 60 Tel Aviv",
    phone: "03-1234567",
    owner: "Yariv Katz",
    logo: "https://coding-academy.org/images/ca_logo.png",
    description: "The best coding academy in the world",
};