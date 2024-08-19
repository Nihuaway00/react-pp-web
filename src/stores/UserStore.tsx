import {makeAutoObservable} from "mobx";

class UserStore {
    names: string[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addName(name: string) {
        this.names.push(name);
    }

    getAll(){
        return this.names;
    }
}

const userStore = new UserStore();
export default userStore;