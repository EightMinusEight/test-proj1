/**
 * Created by Christopher on 12/1/2015.
 * from JavaScfript Crteativity
 */

import $ from 'jquery';

/*

var vvvvvvMovingRedBox = (($) => {

    // Pollyfill for RequestAnimationFrame
    (function () {
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;
    })();


    // Select Canvas Element
    //var ele = document.querySelector("#animation");
    //var ctx = ele.getContext('2d');

    // let bob = new MovingRedBox(document.querySelector("#animation"),{});
    
    const BoxDefault = {
        width:  50,
        height: 50,
        color:  "#ee1122",
        startX: 10,
        startY: 10,
        endX:   100,
        endY:   100
    };
    
    
    class xxxMovingRedBox {
        
        constructor(element, config) {
            // code
            // this._name = nameArg;
            //this.color = 'brown';
            this._ctx = element.getContext('2d');
            this._ele       = element;

            console.log(this._ctx);
            //this._ctx            =

            this._config = $.extend({}, BoxDefault, config);

            this._config.endX = this.maxXVal;
            this._config.endY = this.maxYVal;


            this._x = this._startX = this._config.startX;
            this._y = this._startY = this._config.startY;
            this._endX = this.maxXVal;
            this._endY = this.maxYVal;

            this._duration = 0;



            requestAnimationFrame(this.draw);
            setInterval(this.logic, 1000/60);
        }


        logic() {
            this._duration += 0.02;
            this._x  = this.lerp(this._startX, this._endX, this._duration);
            if (this._x < this.maxXVal){
                requestAnimationFrame(this.draw);
            }


            this._y = this.lerp(this._startY, this._endY, this._duration);
            if (this._y <  this.maxYVal) {
                requestAnimationFrame(this.draw);
            }
        }

        draw(){
            this._ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

            // This sets the fill colour to red
            this._ctx.fillStyle = "#ff0000";

            // fillRectangle(x, y, width, height);
            this._ctx.fillRect(this._x, this._y, this.boxWidth, this.boxHeight);

        }

        lerp(start, end, duration) {
            return start + (end - start) * duration;
        }






        // prototype methods
        prototypeMethod() {
            return 'prototypical';
        }

        // static methods
        static staticMethod() {
            return new Classname(name);
        }

        // getter/setter methods
        get boxHeight() 	{ return this._config.height}
        get boxWidth() 	    { return this._config.width}

        get canvasWidth() 	{ return this._ele.width }
        get canvasHeight() 	{ return this._ele.height }
        get maxXVal() { return this.canvasWidth - this.boxWidth}
        get maxYVal() { return this.canvasHeight - this.boxHeight}
        get element() { return this._ele }
        get ctx() { return this._ctx}


        //set height(val) { this.height = val}
        //get area() 		{ return (this.width * this.height) }




        _getConfig(config) {
            config = $.extend({}, Default, config)
            Util.typeCheckConfig(NAME, config, DefaultType)
            return config
        }








    }



})(jQuery)
*/




//export default MovingRedBox;
//export MovingRedBox;



const BoxDefault = {
    width: 50,
    height: 50,
    color: "#ee1122",
    startX: 10,
    startY: 10,
    endX: 100,
    endY: 100
};


export class MovingRedBox {
    /**
     * 
     * @param {Element} element
     * @param {CanvasRenderingContext2D} ctx
     * @param {Object} config
     */
    constructor(element, ctx, config = {}) {

        /**
         * Canvas Element to draw on
         * @type {Element}
         */
        this._ele = element;
        
        /**
         * Canvas 2DContext Element
         * @type {CanvasRenderingContext2D}
         */
        this._ctx = ctx;
        

        console.log(this._ctx);
        //this._ctx            =

        /**
         * Config Object
         * @type {Object}
         */
        this._config = $.extend({}, BoxDefault, config);

        this._config.endX = this.maxXVal;
        this._config.endY = this.maxYVal;


        this._x = this._startX = this._config.startX;
        this._y = this._startY = this._config.startY;
        this._endX = this.wmaxXVal;
        this._endY = this.maxYVal;

        this._duration = 0;


        // requestAnimationFrame(this.draw);
        //requestAnimationFrame(this.draw);
        //setInterval(this.logic, 1000/60);
    }

    go(){
        //requestAnimationFrame(this.draw);
        //setInterval(this.logic, 1000/60);

        this.draw();
    }

    lerpp(start, end, duration) {
        return start + (end - start) * duration;
    }

    logic() {
        //  this._duration += 0.02;
        //   console.log(this._startX);
        //  console.log(this._endX);
        //  console.log(this._duration);
        // console.log(this.lerpp());
        // console.log(this.lerpp);
        //this._x  = this.lerpp(this._startX, this._endX, this._duration);
        this._x  = this._startX + (this._endX - this._startX) * this._duration;


        if (this._x < this.maxXVal){
            requestAnimationFrame(this.draw);
        }


        //this._y = this.lerpp(this._startY, this._endY, this._duration);
        this._y  = this._startY + (this._endY - this._startY) * this._duration;

        if (this._y <  this.maxYVal) {
            requestAnimationFrame(this.draw);
        }
    }

    draw(){

        console.log("draw this");
        console.log(this);
        console.log("draw bob");
        console.log(bob);
        var bob = window.bbb;


        this._ctx.clearRect(0, 0, bob.canvasWidth, bob.canvasHeight);

        // This sets the fill colour to red
        //this._ctx.fillStyle = "#ff0000";
        this._ctx.fillStyle = "#ff0000";


        // fillRectangle(x, y, width, height);
        //this._ctx.fillRect(this._x, this._y, this.boxWidth, this.boxHeight);
        this._ctx.fillRect(bob.x, bob.y, bob.boxWidth, bob.boxHeight);
    }


    // static methods
    static staticMethod() {
        return new Classname(name);
    }

    // getter/setter methods
    get boxHeight() 	{ return this._config.height}
    get boxWidth() 	    { return this._config.width}

    get canvasWidth() 	{ return this._ele.width }
    get canvasHeight() 	{ return this._ele.height }
    get maxXVal() { return this.canvasWidth - this.boxWidth}
    get maxYVal() { return this.canvasHeight - this.boxHeight}
    get element() { return this._ele }
    get ctx() { return this._ctx}
    get x() { return this._x}
    get y() { return this._y}
    //set height(val) { this.height = val}
    //get area() 		{ return (this.width * this.height) }

    _getConfig(config) {
        config = $.extend({}, Default, config)
        Util.typeCheckConfig(NAME, config, DefaultType)
        return config
    }


}








/**
 * Linear Interpolation (lerp) is used to define subcoordinates of the particular path.
 * @param start
 * @param end
 * @param speed
 * @returns {*}
 */
function lerp(start, end, speed) {
    return start + (end - start) * speed;
}


function degreesToRadians(degrees){
    return degrees * (Math.PI / 180);
}

function dir_x(length, angle){
    return length * Math.cos(degreesToRadians(angle));
}

function dir_y(length, angle){
    return length * Math.sin(degreesToRadians(angle));
}