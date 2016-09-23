/**
 * Created by Christopher on 12/1/2015.
 * from JavaScfript Crteativity
 */




//export default MovingRedBox;
//export MovingRedBox;



const BoxDefault = {
    width: 50,
    height: 50,
    color: "#ee1122",
    startX: 10,
    startY: 10,
    duration: 10
};


export class BouncingRedBox {

    /**
     * Constructor Function
     * @param {Element} element
     * @param {Object} custConfig
     */
    constructor(element, custConfig = {}) {


        let config = {};
        Object.assign(config, BoxDefault, custConfig);

        /** @type {Element} */
        this._ele = element;

        /**
         * @type {CanvasRenderingContext2D}
         * @private
         */
        this._ctx = this._ele.getContext('2d');


        this._x = config.startX;
        this._y = config.startY;

        this._color = config.color;

        this._duration = config.duration;

        this._width = config.width;
        this._height = config.height;

        this._headingX =  Math.random() * 360;
        this._headingY =  Math.random() * 360;

        this._distanceX = 0;
        this._distanceY = 0;

        requestAnimationFrame(this.draw.bind(this));

        setInterval(this.logic.bind(this), 1000/60);
    }

    /**
     * Calculate x & y movement for object
     */
    logic() {
        if (this._headingX > 360 || this._headingX < -360) this._headingX = 0;
        if (this._headingY > 360 || this._headingY < -360) this._headingY = 0;

        if (this._x <= 0 || this._x >= this.maxXVal) {
            this._headingX = this._headingX + 180;
        }

        if (this._y <= 0 || this._y >= this.maxYVal) {
            this._headingY = -this._headingY;
        }

        this._distanceX = dir_x(2, this._headingX);
        this._distanceY = dir_y(2, this._headingY);

        //if (this._duration < 10) this._duration += 0.05;

        this._x = lerp(this._x, this._x + this._distanceX, this._duration);
        this._y = lerp(this._y, this._y + this._distanceY, this._duration);
        requestAnimationFrame(this.draw.bind(this));

    }

    /**
     * Redraw the Canvas
     */
    draw(){
        //console.log("function draw   x: "+this._x+" y:"+this._y);

        this._ctx.clearRect(0, 0, this._ele.width, this._ele.height);

        // This sets the fill colour to red
        //this._ctx.fillStyle = "#ff0000";
        this._ctx.fillStyle = this._color;

        // fillRectangle(x, y, width, height);
        this._ctx.fillRect(this._x, this._y, this._width, this._height);

    }




    // getter/setter methods
    /**
     * The Canvas DOM Element
     * @type {Element}
     */
    get ele() { return this._ele }
    /**
     * The Canvas 2D Context
     * @type {CanvasRenderingContext2D}
     */
    get ctx() { return this._ctx}


    get x() { return this._x}
    get y() { return this._y}

    get boxHeight() 	{ return this._height}
    get boxWidth() 	    { return this._width}

    get canvasWidth() 	{ return this._ele.width }
    get canvasHeight() 	{ return this._ele.height }

    get maxXVal() { return this._ele.width  - this._width}
    get maxYVal() { return this._ele.height - this._height}



    //set height(val) { this.height = val}
    //get area() 		{ return (this.width * this.height) }




}








/**
 * Linear Interpolation (lerp) is used to define subcoordinates of the particular path.
 * @param {number} start
 * @param {number} end
 * @param {number} speed
 * @returns {number}
 */
function lerp(start, end, speed) {
    return start + (end - start) * speed;
}

/**
 * Convert Degrees to Radians
 * @param {number} degrees
 * @returns {number}
 */
function degreesToRadians(degrees){
    return degrees * (Math.PI / 180);
}

/**
 * Find X direction movement from angled path
 * @param {number} length
 * @param {number} angle
 * @returns {number}
 */
function dir_x(length, angle){
    return length * Math.cos(degreesToRadians(angle));
}

/**
 * Find X direction movement from angled path
 * @param {number} length
 * @param {number} angle
 * @returns {number}
 */
function dir_y(length, angle){
    return length * Math.sin(degreesToRadians(angle));
}