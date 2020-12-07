let x = 4000;
let carLength = 1000;
let door1X = 333.33/2 - 63;
let door2X = 333.33*1.5 - 63;
let door3X = 666.66*1.25 - 63;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(75, 78, 85);
	fill(0);
	rect(0,0, width, height/3);
	fill(214, 186, 0);
	rect(0, (height/3)*2, width, 65);
	fill(207, 55, 0);
	rect(width/3, height/3 - 60, width/3, 60);
	fill(0);
	textSize(32);
	text('<- EXIT', width/3 + 5, height/3 - 20);
	text('EXIT ->', (width/3)*2 - 115, height/3 - 20);
	fill(55, 173, 0);
	text('K', width/2 - 60, height/3 - 20);
	fill(148, 148, 148);
	text('N', width/2 - 25, height/3 - 20);
	fill(0, 202, 247);
	text('G', width/2 + 10, height/3 - 20);
}

function draw() {
	let y = height/3;
	let doorPositionY = y + y/3;
	let doorHeight = (y/3)*2;
	let trainHeight = height/3;

	//erases previous train location
	fill(255);
	strokeWeight(0);
	rect(0, y, width, height/3);

	//train
	fill(150);
	rect(x, y, carLength, trainHeight, 15, 15, 0, 0); //Car Body 1
	strokeWeight(1);
	fill(160);
	rect(x + door1X, doorPositionY, 126, doorHeight, 10, 10, 0, 0); //First Door
	rect(x + door2X, doorPositionY, 126, doorHeight, 10, 10, 0, 0); //Second Door
	rect(x + door3X, doorPositionY, 126, doorHeight, 10, 10, 0, 0); //Third Door
	fill(216, 217, 0);
	rect(x, doorPositionY, 63, 100, 0, 10, 10, 0); //First Window
	rect(x + door1X + 8, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Second Window
	rect(x + door1X + 67, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Third Window
	rect(x + 245.33, doorPositionY, 176, 100, 10, 10, 10, 10); //Fourth Window
	rect(x + door2X + 8, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Fifth Window
	rect(x + door2X + 67, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Sixth Window
	rect(x + 578.66, doorPositionY, 176, 100, 10, 10, 10, 10); //Seventh Window
	rect(x + door3X + 8, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Eighth Window
	rect(x + door3X + 67, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Ninth Window
	rect(x + 937, doorPositionY, 63, 100, 10, 0, 0, 10); //Tenth Window

	x = x + 1020;
	strokeWeight(0);
	fill(150);
	rect(x, y, carLength, trainHeight, 15, 15, 0, 0); //Car Body 2
	strokeWeight(1);
	fill(160);
	rect(x + door1X, doorPositionY, 126, doorHeight, 10, 10, 0, 0); //First Door
	rect(x + door2X, doorPositionY, 126, doorHeight, 10, 10, 0, 0); //Second Door
	rect(x + door3X, doorPositionY, 126, doorHeight, 10, 10, 0, 0); //Third Door
	fill(216, 217, 0);
	rect(x, doorPositionY, 63, 100, 0, 10, 10, 0); //First Window
	rect(x + door1X + 8, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Second Window
	rect(x + door1X + 67, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Third Window
	rect(x + 245.33, doorPositionY, 176, 100, 10, 10, 10, 10); //Fourth Window
	rect(x + door2X + 8, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Fifth Window
	rect(x + door2X + 67, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Sixth Window
	rect(x + 578.66, doorPositionY, 176, 100, 10, 10, 10, 10); //Seventh Window
	rect(x + door3X + 8, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Eighth Window
	rect(x + door3X + 67, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Ninth Window
	rect(x + 937, doorPositionY, 63, 100, 10, 0, 0, 10); //Tenth Window

	x = x + 1020;
	strokeWeight(0);
	fill(150);
	rect(x, y, carLength, trainHeight, 15, 15, 0, 0); //Car Body 3
	strokeWeight(1);
	fill(160);
	rect(x + door1X, doorPositionY, 126, doorHeight, 10, 10, 0, 0); //First Door
	rect(x + door2X, doorPositionY, 126, doorHeight, 10, 10, 0, 0); //Second Door
	rect(x + door3X, doorPositionY, 126, doorHeight, 10, 10, 0, 0); //Third Door
	fill(216, 217, 0);
	rect(x, doorPositionY, 63, 100, 0, 10, 10, 0); //First Window
	rect(x + door1X + 8, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Second Window
	rect(x + door1X + 67, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Third Window
	rect(x + 245.33, doorPositionY, 176, 100, 10, 10, 10, 10); //Fourth Window
	rect(x + door2X + 8, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Fifth Window
	rect(x + door2X + 67, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Sixth Window
	rect(x + 578.66, doorPositionY, 176, 100, 10, 10, 10, 10); //Seventh Window
	rect(x + door3X + 8, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Eighth Window
	rect(x + door3X + 67, doorPositionY + 10, 50, 75, 10, 10, 10, 10); //Ninth Window
	rect(x + 937, doorPositionY, 63, 100, 10, 0, 0, 10); //Tenth Window
	x = x - 2040;
	x = x - 75;

	//resets train to loop
	if (x <= -3060) {
		x = 4000;
	} else {
	}
}
