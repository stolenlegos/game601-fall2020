let positionX = 400;
let positionY = 400;
let moveSpeed = 15;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background (135, 206, 235);
	moveHeliKeys();
	moveHeliClick();
	backgroundCity();
	helicopter();
	foregroundCity();
}

function foregroundCity() {
	strokeWeight(0);
	//Building Left
	fill(100);
	rect(500, 200, 510, height);
	fill(199, 190, 38);
	rect(510, 210, 115, 150);
	rect(635, 210, 115, 150);
	rect(760, 210, 115, 150);
	rect(885, 210, 115, 150);
	rect(510, 370, 115, 150);
	rect(635, 370, 115, 150);
	rect(760, 370, 115, 150);
	rect(885, 370, 115, 150);
	rect(510, 530, 115, 150);
	rect(635, 530, 115, 150);
	rect(760, 530, 115, 150);
	rect(885, 530, 115, 150);
	rect(510, 690, 115, 150);
	rect(635, 690, 115, 150);
	rect(760, 690, 115, 150);
	rect(885, 690, 115, 150);
	rect(510, 850, 115, 150);
	rect(635, 850, 115, 150);
	rect(760, 850, 115, 150);
	rect(885, 850, 115, 150);

	//Building Right
	fill(100);
	rect(1500, 300, 510, height);
	fill(199, 190, 38);
	rect(1510, 310, 115, 150);
	rect(1635, 310, 115, 150);
	rect(1760, 310, 115, 150);
	rect(1885, 310, 115, 150);
	rect(1510, 470, 115, 150);
	rect(1635, 470, 115, 150);
	rect(1760, 470, 115, 150);
	rect(1885, 470, 115, 150);
	rect(1510, 630, 115, 150);
	rect(1635, 630, 115, 150);
	rect(1760, 630, 115, 150);
	rect(1885, 630, 115, 150);
	rect(1510, 790, 115, 150);
	rect(1635, 790, 115, 150);
	rect(1760, 790, 115, 150);
	rect(1885, 790, 115, 150);

	//Clouds
	fill(255);
	ellipse(0, 200, 400, 400);
	ellipse(150, 200, 300, 300);
	ellipse(1400, 0, 400, 400);
	ellipse(1200, 100, 275, 275);
	ellipse(1525, 100, 270, 270);
}

function backgroundCity() {
	strokeWeight(0);

	//Building Left
	fill(100);
	rect(100, 500, 310, height);
	fill(199, 190, 38);
	rect(110, 510, 65, 100);
	rect(185, 510, 65, 100);
	rect(260, 510, 65, 100);
	rect(335, 510, 65, 100);
	rect(110, 620, 65, 100);
	rect(185, 620, 65, 100);
	rect(260, 620, 65, 100);
	rect(335, 620, 65, 100);
	rect(110, 730, 65, 100);
	rect(185, 730, 65, 100);
	rect(260, 730, 65, 100);
	rect(335, 730, 65, 100);
	rect(110, 840, 65, 100);
	rect(185, 840, 65, 100);
	rect(260, 840, 65, 100);
	rect(335, 840, 65, 100);

	//Building Right
	fill(100);
	rect(1050, 400, 410, height);
	fill(199,190, 38);
	rect(1060, 410, 90, 150);
	rect(1160, 410, 90, 150);
	rect(1260, 410, 90, 150);
	rect(1360, 410, 90, 150);
	rect(1060, 570, 90, 150);
	rect(1160, 570, 90, 150);
	rect(1260, 570, 90, 150);
	rect(1360, 570, 90, 150);
	rect(1060, 730, 90, 150);
	rect(1160, 730, 90, 150);
	rect(1260, 730, 90, 150);
	rect(1360, 730, 90, 150);

	//clouds
	fill(255);
	ellipse(400, 400, 100, 100);
	ellipse(350, 400, 75, 75);
	ellipse(425, 375, 75, 75);
	ellipse(760, 100, 150, 150);
	ellipse(700, 75, 100, 100);
	ellipse(820, 75, 100, 100);
}

function helicopter() {
	fill(91, 12, 156);
	ellipse(positionX, positionY, 60, 60);
	triangle(positionX + 70, positionY, positionX + 6, positionY, positionX + 6, positionY + 30)
	fill(177, 250, 247);
	arc(positionX, positionY, 60, 60, 3, 4.60);
	strokeWeight(3);
	//top propeller
	line(positionX, positionY - 30, positionX, positionY - 37);
	line(positionX - 45, positionY - 37, positionX + 45, positionY - 37);
	//feet
	line(positionX - 10, positionY + 29, positionX - 14, positionY + 34);
	line(positionX + 10, positionY + 29, positionX + 14, positionY + 34);
	line(positionX - 35, positionY + 34, positionX + 35, positionY + 34);
	//back propeller
	line(positionX + 65, positionY - 5, positionX + 75, positionY + 5);
	line(positionX + 75, positionY - 5, positionX + 65, positionY + 5);
}

function moveHeliKeys() {
	if (keyIsPressed) {
		if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
			positionX = positionX - moveSpeed;
		}
		if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
			positionX = positionX + moveSpeed;
		}
		if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
			positionY = positionY - moveSpeed;
		}
		if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
			positionY = positionY + moveSpeed;
		}
	}
}

function moveHeliClick() {
	if (mouseIsPressed) {
		positionX = mouseX;
		positionY = mouseY;
	}
}
