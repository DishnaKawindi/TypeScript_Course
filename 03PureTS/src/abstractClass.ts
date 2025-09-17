// cannot create objects from abstract classes but can be extended to another class

abstract class TakePhoto1 {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void

    getReelTime(): number{
        // some complex calculations
        return 8;
    }
}



class Instagram1 extends TakePhoto1 {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void{
        console.log("Sepia")
    }
}

const dk = new Instagram1("test", "test", 3)

dk.getReelTime(); // accessible