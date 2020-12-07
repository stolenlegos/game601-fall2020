let star = [];
let velX;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	velX = random(0.0005, 0.005);

	for (i=1; i<501; i++) {
		star[i] = new stars(velX);
		velX *= 1.01;
	}
}

function draw() {
	background(0);
	for (i=1; i<501; i++) {
		star[i].update();
	}
}


class stars {
	constructor(x) {
		this.red = random(175,255);
		this.green = random(175,255);
		this.blue = random(175, 255);
		this.x = random(0, width);
		this.y = random(0, height);
		this.diam = random(1, 4);
		this.velX = x;
		this.acceleration = this.velX + 0.01;
	}

	update() {
		fill(this.red, this.green, this.blue);
		ellipse(this.x, this.y, this.diam, this.diam);
		this.x -= this.velX;
		if (this.x < -5) {
			this.x = width + 5;
		}
		this.velX += this.acceleration;
	}
}
