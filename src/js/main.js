import {random} from "./util";

const rOne = random(10);
const rTwo = random(20);

//console.log(`${rOne} ${rTwo}`);

class epx {
    constructor(){
        this.data = "dsagqw";
    }
}

class ext extends epx {
    constructor(){
        super();
    }

    get dat(){
        return this.data;
    }
}

const clasic = new ext;

console.log(clasic.dat);