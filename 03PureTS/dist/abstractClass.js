"use strict";
// cannot create objects from abstract classes but can be extended to another class
class TakePhoto1 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculations
        return 8;
    }
}
class Instagram1 extends TakePhoto1 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const dk = new Instagram1("test", "test", 3);
dk.getReelTime(); // accessible
