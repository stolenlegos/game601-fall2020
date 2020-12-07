function setup() {
	createCanvas(windowWidth, windowHeight);
	//sky
	background(0, 191, 255);

	//hillside
	fill(27, 161, 0)
	strokeWeight(0)
	ellipse(width/2, height, width*1.5, 400);
}

function draw() {
	//Arrow Shaft
	frameRate(5)
	strokeWeight(1)
	stroke(115, 65, 26)
	line(mouseX+7, mouseY+7, mouseX-7, mouseY-7)
	//Arrow Head
	strokeWeight(0)
	fill(200)
	triangle(mouseX+9, mouseY+5, mouseX+11, mouseY+11, mouseX+5, mouseY+9)
	//feathers
	fill(255);
	quad(mouseX-2, mouseY-2, mouseX-5, mouseY-2, mouseX-10, mouseY-7, mouseX-7, mouseY-7)
	quad(mouseX-2, mouseY-2, mouseX-2, mouseY-5, mouseX-7, mouseY-10, mouseX-7, mouseY-7);

	//watchtower
	fill(117)
	strokeWeight(1)
	stroke(0)
	//bottom row (Center, Left, Right)
	rect(width/2-50, height-200, 100, 50)
	rect(width/2-150, height-200, 100, 50)
	rect(width/2+50, height-200, 100, 50)
	//second row
	rect(width/2-50, height-250, 100, 50)
	rect(width/2-150, height-250, 100, 50)
	rect(width/2+50, height-250, 100, 50)
	//third row
	rect(width/2-50, height-300, 100, 50)
	rect(width/2-150, height-300, 100, 50)
	rect(width/2+50, height-300, 100, 50)
	//fourth row
	rect(width/2-50, height-350, 100, 50)
	rect(width/2-150, height-350, 100, 50)
	rect(width/2+50, height-350, 100, 50)
	//fifth row
	rect(width/2-50, height-400, 100, 50)
	rect(width/2-150, height-400, 100, 50)
	rect(width/2+50, height-400, 100, 50)
	//sixth row
	rect(width/2-50, height-450, 100, 50)
	rect(width/2-150, height-450, 100, 50)
	rect(width/2+50, height-450, 100, 50)
	//seventh row
	rect(width/2-50, height-500, 100, 50)
	rect(width/2-150, height-500, 100, 50)
	rect(width/2+50, height-500, 100, 50)
	//eigth row
	rect(width/2-50, height-550, 100, 50)
	rect(width/2-150, height-550, 100, 50)
	rect(width/2+50, height-550, 100, 50)
	//ninth row
	rect(width/2-50, height-600, 100, 50)
	rect(width/2-150, height-600, 100, 50)
	rect(width/2+50, height-600, 100, 50)
	//tenth row
	rect(width/2-50, height-650, 100, 50)
	rect(width/2-150, height-650, 100, 50)
	rect(width/2+50, height-650, 100, 50)
	//turrets
	rect(width/2-25, height-700, 50, 50)
	rect(width/2-150, height-700, 50, 50)
	rect(width/2+100, height-700, 50, 50);
}

/*draws an arrow where the mouse clicks, however returns following error:

 Error: Permission denied to access property "touches".

function draw() {
	if (mouseIsPressed) {
		//Arrow Shaft
		strokeWeight(1)
		stroke(115, 65, 26)
		line(mouseX+7, mouseY+7, mouseX-7, mouseY-7);
		//Arrow Head
		strokeWeight(0)
		fill(200)
		triangle(mouseX+9, mouseY+5, mouseX+11, mouseY+11, mouseX+5, mouseY+9);
		//feathers
		fill(255)
		quad(mouseX-2, mouseY-2, mouseX-5, mouseY-2, mouseX-10, mouseY-7, mouseX-7, mouseY-7)
		quad(mouseX-2, mouseY-2, mouseX-2, mouseY-5, mouseX-7, mouseY-10, mouseX-7, mouseY-7);
} else{
	}
	*/
