let x = 0;
let y = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0, 119, 190);

	waves(x, y);

	for(i = 0; i <= 100; i++) {
		cargoships(random(width), random(height), random(20, 40));
	}
}

function draw() {

}

function cargoships(x, y, size) {
	fill(146, 134,134);
	noStroke();
	rect(x, y, size, size/2, 10, 10, 0, 0);
	rect(x, y + size/2, size*4, size/2, 0, 0, 20, 20);

	fill(random(255), random(255), random(255));
	rect(x + size + size/8, y, size*2.75, size/4);

	fill(random(255), random(255), random(255));
	rect(x + size + size/8, y + size/4, size*2.75, size/4);
}

function waves(x, y) {
	for (let i = 0; i <= 160; i++) {
		noFill();
		strokeWeight(10);
		stroke(255);
		arc(x - 123, y, 150, 100, 0.5, 2.7);

		if (i == 16 || i == 32 || i == 48 || i == 64 || i == 80 || i == 96 || i == 112 || i == 128 || i == 144 || i == 160) {
			y = y + 100;
			x = 0;
		}

		x = x + 123;
	}
}
