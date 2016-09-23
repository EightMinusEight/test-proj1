class Scene {
    constructor(size = {width: 900, height: 600}, options = {zIndex: 1}) {
        this.objects = [];

        this.tickInterval = undefined;
        this.width = size.width;
        this.height = size.height;

        let canvas = document.createElement('canvas');
        canvas.width = size.width;
        canvas.height = size.height;
        canvas.style.position = 'absolute';
        canvas.style.backgroundColor = 'black';
        canvas.style.zIndex = options.zIndex;
        document.body.appendChild(canvas);
        this.context = canvas.getContext('2d');
    }

    addObject(object) {
        this.objects.push(object);
    }

    render() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.objects.forEach( o => {
            o.draw(this.context);
        });
    }
}

class Line {
    constructor(options) {
        this.options = options;
    }

    draw(context) {
        if (context == null) return false;

        context.beginPath();
        context.lineWidth = this.options.linewidth;
        context.strokeStyle = this.options.strokestyle;
        context.moveTo(this.options.x1, this.options.y1);
        context.lineTo(this.options.x2, this.options.y2);
        context.stroke();
    }
}

class Circle {
    constructor(options) {
        this.options = options;
        this.context = undefined;
    }

    followToMouse() {
        window.addEventListener('mousemove', (e) => {
            this.options.x = e.pageX - this.options.radius / 2;
            this.options.y = e.pageY - this.options.radius / 2;

            this.draw(this.context);
        });
    }

    draw(context) {
        this.context = context;
        if (this.context == null) return false;

        this.context.beginPath();
        this.context.arc(
            this.options.x,
            this.options.y,
            this.options.radius,
            0,
            2*Math.PI,
            false
        );
        this.context.fill();
        this.context.lineWidth = 1;
        this.context.strokeStyle = '#FF4136';
        this.context.stroke();
    }
}







let line = new Line({
    x1: 20,
    y1: 30,
    x2: 100,
    y2: 20,
    linewidth: 2,
    strokestyle: 'red'
});

let circle = new Circle({
    x: 100,
    y: 100,
    radius: 50
});

let scene = new Scene();
scene.addObject(line);
scene.addObject(circle);
scene.render();
circle.followToMouse();

animateScenes(scene);

function animateScenes(scenes) {
    scene.render();
    window.requestAnimationFrame(animateScenes.bind(this, scene));
}
