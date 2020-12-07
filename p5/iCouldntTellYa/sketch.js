let hue = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

	noStroke();
	colorMode(HSB, height);
}

function draw() {
	background(hue, height, height*0.1);

	for (i = 0; i < 1500; i++) {
		let x1 = random(0, width);
		let y1 = random(0, height);
		fill(y1, height, height);
		quad(x1, y1, x1 + 50, y1 + 52.5, x1 + 100, y1 + 100, x1 + 52.5, y1 + 50);
	}

	let ii = 0;
	while (ii < 1100) {
		let x2 = random(0, width);
		let y2 = random(0, height);
		fill(hue, height, height*0.1);
		rect(x2, y2, 200, 3);
		ii++;
	}
	if (hue <= height) {
		hue = hue + 2;
	} else {
		hue = 0;
	}
}
