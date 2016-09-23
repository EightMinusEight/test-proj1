class Boid {

    constructor(x, y, heading, size) {
        this.x = x;
        this.y = y;
        this.heading = heading;
        this.size = size;
    }

}

{

    const canvas = document.querySelector("#animation2");
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const flock = [];

    const flockRadius = 250;


    function setup() {

        for (let i = 0; i < 10; i++) {
            flock.push(
                new Boid(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 360, 15)
            );
        }
        setInterval(logic, 1000 / 60);
    }

    function logic() {

        for (let i = 0; i < flock.length; i++) {
            let centerx = 0;
            let centery = 0;
            let count = 0;

            const b = flock[i];

            for (let j = 0; j < flock.length; j++) {
                const distance = distanceBetween(b, flock[j]);
                if (distance < flockRadius) {
                    centerx += flock[j].x;
                    centery += flock[j].y;
                    count++;
                }
            }

            if (count > 1) {
                centerx = centerx / count;
                centery = centery / count;
            }
            else {
                centerx = Math.random() * canvas.width;
                centery = Math.random() * canvas.height;
            }

            const angleToCenter = angleBetween(b.x, b.y, centerx, centery);
            const lerpangle = angleDifference(b.heading, angleToCenter);

            b.heading += lerpangle * 0.01;

            let headingx = dir_x(2, b.heading);
            let headingy = dir_y(2, b.heading);

            b.x += headingx;
            b.y += headingy;

            if (b.x < 0) {
                b.x = canvas.width;
            }
            if (b.y < 0) {
                b.y = canvas.height;
            }

            if (b.x > canvas.width) {
                b.x = 0;
            }
            if (b.y > canvas.height) {
                b.y = 0;
            }
        }

        requestAnimationFrame(draw);
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < flock.length; i++) {
            const b = flock[i];
            ctx.fillStyle = "blue";
            ctx.fillRect(b.x, b.y, b.size, b.size);
            ctx.beginPath();
            ctx.moveTo(b.x + (b.size / 2), b.y + (b.size / 2));
            ctx.lineTo(
                (b.x + (b.size / 2)) + dir_x(20, flock[i].heading),
                (b.y + (b.size / 2)) + dir_y(20, flock[i].heading)
            );
            ctx.strokeStyle = "red";
            ctx.stroke();
        }
    }

    function distanceBetween(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    function angleBetween(x1, y1, x2, y2) {
        return Math.atan2(y1 - y2, x1 - x2) * (180.0 / Math.PI);
    }

    function angleDifference(a1, a2) {
        return ((((a1 - a2) % 360) + 540) % 360) - 180;
    }

    function degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    function dir_x(length, angle) {
        return length * Math.cos(degreesToRadians(angle));
    }

    function dir_y(length, angle) {
        return length * Math.sin(degreesToRadians(angle));
    }

    setup();

}