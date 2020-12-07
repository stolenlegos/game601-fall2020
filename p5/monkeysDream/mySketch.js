let ban = [];
let monkey = [];
let star = [];
let music;
let r = 5;
let g = 0;
let b = 15;
let changeR = 0.05;
let changeG = 0.05;
let changeB = 0.05;

function preload() {
	soundFormats('mp3', 'ogg');
	music = loadSound('bensound-slowmotion.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	music.play();
	
	for (i = 1; i < 6; i++) {
		monkey[i] = new monkies();
	}
	
	for (i = 1; i < 501; i++) {
		ban[i] = new bans();
	}
	
	for (i=1; i<3001; i++) {
		star[i] = new stars();
	}
}

function draw() {
	background(r, g, b);
	translate(width/2, height/2);
	
	for (i = 1; i < 3001; i++) {
		star[i].update();
	}
	
	for (i = 1; i < 6; i++) {
		monkey[i].update();
	}
	
	for (i = 1; i < 501; i++) {
		ban[i].update();
	}
	
	if (r >= 20 || r <= 0) {
		changeR *= -1
	}
	if (g >= 20 || g <= 0) {
		changeG *= -1
	}
	if (b >= 20 | b <= 0) {
		changeB *= -1
	}
	r += changeR;
	g += changeG;
	b += changeB;
}

class bans {
	constructor() {
		this.x = random(0, width / 2);
		this.y = random(0, height / 2);
		this.diam = random(40, 80);
		this.rotate = random(300);
	}
	
	update() {
		fill(255, 225, 53);
		rotate(this.rotate);
		arc(this.x, this.y, this.diam, this.diam, 0, HALF_PI, CHORD);
		this.rotate += 0.00002;
	}
}

class monkies {
	constructor() {
		this.x = random(-width/2 + 90, width/2 - 90);
		this.y = random(-height/2 + 90, height/2 - 90);
		this.velX = random(0.1, 2);
		this.velY = random(0.1, 2);
	}
	
	update() {
		fill(103, 78, 56);
		//body
		ellipse(this.x, this.y, 50, 100);
		//arms
		ellipse(this.x - 25, this.y - 10, 20, 20);
		ellipse(this.x + 25, this.y - 10, 20, 20);
		//legs
		ellipse(this.x - 13, this.y + 50, 25, 25);
		ellipse(this.x + 13, this.y + 50, 25, 25);
		//head
		ellipse(this.x, this.y -50, 40, 40);
		
		this.x += this.velX;
		this.y += this.velY;
		if (this.x + 40 >= width/2 || this.x - 40 <= -width/2) {
			this.velX *= -1
		}
		if (this.y + 65 >= height/2 || this.y - 70 <= -height/2) {
			this.velY *= -1
		}
	}
}

class stars {
	constructor() {
		this.red = random(175,255);
		this.green = random(175,255);
		this.blue = random(175, 255);
		this.x = random(-width / 2, width / 2);
		this.y = random(-height / 2, height / 2);
		this.diam = random(1, 4);
	}
	
	update() {
		fill(this.red, this.green, this.blue);
		ellipse(this.x, this.y, this.diam, this.diam);
		this.x += 1;
		if (this.x >= width/2) {
			this.x = -width/2;
		}
	}
}
