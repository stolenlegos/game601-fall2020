let k1X;
let k2X;
let k3X;
let k4X;
let k5X;
let k6X;
let k7X;
let k8X;
let k9X;
let k10X;
let k11X;

let k1Y;
let k2Y;
let k3Y;
let k4Y;
let k5Y;
let k6Y;
let k7Y;
let k8Y;
let k9Y;
let k10Y;
let k11Y;

let gravityOne = 0.7;
let gravityTwo = 0.7;
let gravityThree = 0.7;
let gravityFour = 0.7;
let gravityFive = 0.7;
let gravitySix = 0.7;
let gravitySeven = 0.7;
let gravityEight = 0.7;
let gravityNine = 0.7;
let gravityTen = 0.7;
let gravityEleven = 0.7;

let velXOne = 3;
let velXTwo = -3;
let velXThree = 3;
let velXFour = -3;
let velXFive = 3;
let velXSix = -3;
let velXSeven = 3;
let velXEight = -3;
let velXNine = 3;
let velXTen = -3;
let velXEleven = 3;

let velYOne = -30;
let velYTwo = -30;
let velYThree = -30;
let velYFour = -30;
let velYFive = -30;
let velYSix = -30;
let velYSeven = -30;
let velYEight = -30;
let velYNine = -30;
let velYTen = -30;
let velYEleven = -30;

let popKOne = 20;
let popKTwo = 20;
let popKThree = 20;
let popKFour = 20;
let popKFive = 20;
let popKSix = 20;
let popKSeven = 20;
let popKEight = 20;
let popKNine = 20;
let popKTen = 20;
let popKEleven = 20;

let posYOne;
let posYTwo;
let posYThree;
let posYFour;
let posYFive;
let posYSix;
let posYSeven;
let posYEight;
let posYNine;
let posYTen;
let posYEleven;

let posXOne;
let posXTwo;
let posXThree;
let posXFour;
let posXFive;
let posXSix;
let posXSeven;
let posXEight;
let posXNine;
let posXTen;
let posXEleven;

let score = 0;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	//Generates Kernel X position
	k1X = int(random(60, width - 60));
	k2X = int(random(60, width - 60));
	k3X = int(random(60, width - 60));
	k4X = int(random(60, width - 60));
	k5X = int(random(60, width - 60));
	k6X = int(random(60, width - 60));
	k7X = int(random(60, width - 60));
	k8X = int(random(60, width - 60));
	k9X = int(random(60, width - 60));
	k10X = int(random(60, width - 60));
	k11X = int(random(60, width - 60));

	//Kernel Y position
	k1Y = height - 47;
	k2Y = height - 47;
	k3Y = height - 47;
	k4Y = height - 47;
	k5Y = height - 47;
	k6Y = height - 47;
	k7Y = height - 47;
	k8Y = height - 47;
	k9Y = height - 47;
	k10Y = height - 47;
	k11Y = height - 47;

	//Popcorn Y position
	posYOne = height - 47;
	posYTwo = height - 47;
	posYThree = height - 47;
	posYFour = height - 47;
	posYFive = height - 47;
	posYSix = height - 47;
	posYSeven = height - 47;
	posYEight = height - 47;
	posYNine = height - 47;
	posYTen = height - 47;
	posYEleven = height - 47;

	//Popcorn X position
	posXOne = k1X;
	posXTwo = k2X;
	posXThree = k3X;
	posXFour = k4X;
	posXFive = k5X;
	posXSix = k6X;
	posXSeven = k7X;
	posXEight = k8X;
	posXNine = k9X;
	posXTen = k10X;
	posXEleven = k11X;

	//Score text size
	textSize(40);
}


function draw() {
	//Draws environment
	pot();
	oil();

	//Determines random pop frequency
	kernelsPop();

	//Draws kernels and runs pop sequence
	kernelOne();
	kernelTwo();
	kernelThree();
	kernelFour();
	kernelFive();
	kernelSix();
	kernelSeven();
	kernelEight();
	kernelNine();
	kernelTen();
	kernelEleven();

	//Scoreboard
	text('Score', 25, 40);
	text(score, 25, 75);
}


function kernelOne() {
	//Draws kernel
	strokeWeight(3);
	stroke(189, 128, 49);
	fill(222, 152, 60);
  rect(k1X, k1Y, 24, 24, 24, 24, 0, 24);

	//Conditionals for popping
	if (popKOne == k1X) {
		popKernelOne();
	}
	if (mouseIsPressed) {
		if (dist(mouseX, mouseY, k1X + 12, k1Y + 12) <= 12) {
			popKOne = k1X;
			popKernelOne();
			score = score + 1;
		}
	}
}


function kernelTwo() {
	//Draws Kernel
	strokeWeight(3);
	stroke(189, 128, 49);
	fill(222, 152, 60);
	rect(k2X, k2Y, 24, 24, 24, 24, 24, 0);

	//Conditionals for popping
	if (popKTwo == k2X) {
		popKernelTwo();
	}
	if (mouseIsPressed) {
		if (dist(mouseX, mouseY, k2X + 12, k2Y + 12) <= 12) {
			popKTwo = k2X;
			popKernelTwo();
			score = score + 1;
		}
	}
}


function kernelThree() {
	//Draws Kernel
	strokeWeight(3);
	stroke(189, 128, 49);
	fill(222, 152, 60);
	rect(k3X, k3Y, 24, 24, 0, 24, 24, 24);

	//Conditionals for popping
	if (popKThree == k3X) {
		popKernelThree();
	}
	if (mouseIsPressed) {
		if (dist(mouseX, mouseY, k3X + 12, k3Y + 12) <= 12) {
			popKThree = k3X;
			popKernelThree();
			score = score + 1;
		}
	}
}


function kernelFour() {
	//Draws Kernel
	strokeWeight(3);
	stroke(189, 128, 49);
	fill(222, 152, 60);
	rect(k4X, k4Y, 24, 24, 24, 0, 24, 24);

	//Conditionals for popping
	if (popKFour == k4X) {
		popKernelFour();
	}
	if (mouseIsPressed) {
		if (dist(mouseX, mouseY, k4X + 12, k4Y + 12) <= 12) {
			popKFour = k4X;
			popKernelFour();
			score = score + 1;
		}
	}
}


function kernelFive() {
	//Draws Kernel
	strokeWeight(3);
	stroke(189, 128, 49);
	fill(222, 152, 60);
	rect(k5X, k5Y, 24, 24, 24, 24, 0, 24);

	//Conditionals for popping
	if (popKFive == k5X) {
		popKernelFive();
	}
	if (mouseIsPressed) {
		if (dist(mouseX, mouseY, k5X + 12, k5Y + 12) <= 12) {
			popKFive = k5X;
			popKernelFive();
			score = score + 1;
		}
	}
}


function kernelSix() {
	//Draw Kernel
	strokeWeight(3);
	stroke(189, 128, 49);
	fill(222, 152, 60);
	rect(k6X, k6Y, 24, 24, 24, 24, 24, 0);

	//Conditionals for popping
	if (popKSix == k6X) {
		popKernelSix();
	}
	if (mouseIsPressed) {
		if (dist(mouseX, mouseY, k6X + 12, k6Y + 12) <= 12) {
			popKSix = k6X;
			popKernelSix();
			score = score + 1;
		}
	}
}


function kernelSeven() {
	//Draw Kernel
	strokeWeight(3);
	stroke(189, 128, 49);
	fill(222, 152, 60);
	rect(k7X, k7Y, 24, 24, 0, 24, 24, 24);

	//Conditionals for popping
	if (popKSeven == k7X) {
		popKernelSeven();
	}
	if (mouseIsPressed) {
		if (dist(mouseX, mouseY, k7X + 12, k7Y + 12) <= 12) {
			popKSeven = k7X;
			popKernelSeven();
			score = score + 1;
		}
	}
}


function kernelEight() {
	//Draw Kernel
	strokeWeight(3);
	stroke(189, 128, 49);
	fill(222, 152, 60);
	rect(k8X, k8Y, 24, 24, 24, 0, 24, 24);

	//Conditionals for popping
	if (popKEight == k8X) {
		popKernelEight();
	}
	if (mouseIsPressed) {
		if (dist(mouseX, mouseY, k8X + 12, k8Y + 12) <= 12) {
			popKEight = k8X;
			popKernelEight();
			score = score + 1;
		}
	}
}


function kernelNine() {
	//Draw Kernel
	strokeWeight(3);
	stroke(189, 128, 49);
	fill(222, 152, 60);
	rect(k9X, k9Y, 24, 24, 24, 24, 0, 24);

	//Conditionals for popping
	if (popKNine == k9X) {
		popKernelNine();
	}
	if (mouseIsPressed) {
		if (dist(mouseX, mouseY, k9X + 12, k9Y + 12) <= 12) {
			popKNine = k9X;
			popKernelNine();
			score = score + 1;
		}
	}
}


function kernelTen() {
	//Draw Kernel
	strokeWeight(3);
	stroke(189, 128, 49);
	fill(222, 152, 60);
	rect(k10X, k10Y, 24, 24, 24, 24, 24, 0);

	//Conditionals for popping
	if (popKTen == k10X) {
		popKernelTen();
	}
	if (mouseIsPressed) {
		if (dist(mouseX, mouseY, k10X + 12, k10Y + 12) <= 12) {
			popKTen = k10X;
			popKernelTen();
			score = score + 1;
		}
	}
}


function kernelEleven() {
	//Draw Kernel
	strokeWeight(3);
	stroke(189, 128, 49);
	fill(222, 152, 60);
	rect(k11X, k11Y, 24, 24, 0, 24, 24, 24);

	//Conditionals for popping
	if (popKEleven == k11X) {
		popKernelEleven();
	}
	if (mouseIsPressed) {
		if (dist(mouseX, mouseY, k11X + 12, k11Y + 12) <= 12) {
			popKEleven = k11X;
			popKernelEleven();
			score = score + 1;
		}
	}
}


function oil() {
	//Draws oil
	strokeWeight(0);
	fill(212, 171, 8);
	rect(23, height - 53, width - 45, 47);
	strokeWeight(3);
	stroke(153, 124, 6);
	line(23, height - 53, width - 23, height - 53);
}


function pot() {
	//Draws pot
	strokeWeight(5);
	stroke(70);
	fill(100);
	rect(20, 0, width - 40, height);
}


function kernelsPop() {
	//Determines automated pop. Keeps two kernels from popping at exact the same time.
	if (popKOne == k1X || (popKOne <= k1X + 20 && popKOne >= k1X - 20)) {
		popKOne = k1X;
		if (popKTwo == k2X || (popKTwo <= k2X + 20 && popKTwo >= k2X - 20)) {
			popKTwo = k2X;
			if (popKThree == k3X || (popKThree <= k3X + 20 && popKThree >= k3X - 20)) {
				popKThree = k3X;
				if (popKFour == k4X || (popKFour <= k4X + 20 && popKFour >= k4X - 20)) {
					popKFour = k4X;
					if (popKFive == k5X || (popKFive <= k5X + 20 && popKFive >= k5X - 20)) {
						popKFive = k5X;
						if (popKSix == k6X || (popKSix <= k6X + 20 && popKSix >= k6X - 20)) {
							popKSix = k6X;
							if (popKSeven == k7X || (popKSeven <= k7X + 20 && popKSeven >= k7X - 20)) {
								popKSeven = k7X;
								if (popKEight == k8X || (popKEight <= k8X + 20 && popKEight >= k8X - 20)) {
									popKEight = k8X;
									if (popKNine == k9X || (popKNine <= k9X + 20 && popKOne >= k9X - 20)) {
										popKNine = k9X;
										if (popKTen == k10X || (popKTen <= k10X + 20 && popKTen >= k10X - 20)) {
											popKTen = k10X;
											if(popKEleven == k11X || (popKEleven <= k11X + 20 && popKEleven >= k11X - 20)) {
												popKEleven = k11X;
											} else {
												popKEleven = int(random(20, width - 40));
											}
										} else {
											popKTen = int(random(20, width - 40));
										}
									} else {
										popKNine = int(random(20, width - 40));
									}
								} else {
									popKEight = int(random(20, width - 40));
								}
							} else {
								popKSeven = int(random(20, width - 40));
							}
						} else {
							popKSix = int(random(20, width - 40));
						}
					} else {
						popKFive = int(random(20, width - 40));
					}
				} else {
					popKFour = int(random(20, width - 40));
				}
			} else {
				popKThree = int(random(20, width - 40));
			}
		} else {
			popKTwo = int(random(20, width - 40));
		}
	} else {
		popKOne = int(random(20, width - 40));
	}
}


function popKernelOne() {
	//Draws popcorn
	fill(255, 235, 171);
	ellipse(posXOne, posYOne - 25, 50, 50);
	ellipse(posXOne + 12, posYOne - 50, 50, 50);
	ellipse(posXOne + 25, posYOne - 12, 50, 50);
	fill(189, 128, 49);
	ellipse(posXOne + 12, posYOne - 30, 40, 25);

	//Animate popcorn and removes kernel from view
	if (posYOne > height - 46) {
		velXOne = 0;
		posYOne = height - 30;
		velYOne = 0;
		gravityOne = 0;
	}

	k1Y = height * 2;
	velYOne = velYOne + gravityOne;
	posYOne = posYOne + velYOne;
	posXOne = posXOne + velXOne;

	if (posXOne >= width - 71 || posXOne <= 47) {
		velXOne = velXOne * -1;
	}
}


function popKernelTwo() {
	//Draws popcorn
	fill(255, 235, 171);
	ellipse(posXTwo, posYTwo - 25, 50, 50);
	ellipse(posXTwo + 12, posYTwo - 50, 50, 50);
	ellipse(posXTwo + 25, posYTwo - 12, 50, 50);
	fill(189, 128, 49);
	ellipse(posXTwo + 12, posYTwo - 30, 40, 25);

	//Animate popcorn and removes kernel from view
	if (posYTwo > height - 46) {
		velXTwo = 0;
		posYTwo = height - 30;
		velYTwo = 0;
		gravityTwo = 0;
	}

	k2Y = height * 2;
	velYTwo = velYTwo + gravityTwo;
	posYTwo = posYTwo + velYTwo;
	posXTwo = posXTwo + velXTwo;

	if (posXTwo >= width - 71 || posXTwo <= 47) {
		velXTwo = velXTwo * -1;
	}
}


function popKernelThree() {
	//Draw popcorn
	fill(255, 235, 171);
	ellipse(posXThree, posYThree - 25, 50, 50);
	ellipse(posXThree + 12, posYThree - 50, 50, 50);
	ellipse(posXThree + 25, posYThree - 12, 50, 50);
	fill(189, 128, 49);
	ellipse(posXThree + 12, posYThree - 30, 40, 25);

	//Animate popcorn and removes kernel from view
	if (posYThree > height - 46) {
		velXThree = 0;
		posYThree = height - 30;
		velYThree = 0;
		gravityThree = 0;
	}

	k3Y = height * 2;
	velYThree = velYThree + gravityThree;
	posYThree = posYThree + velYThree;
	posXThree = posXThree + velXThree;

	if (posXThree >= width - 71 || posXThree <= 47) {
		velXThree = velXThree * -1;
	}
}


function popKernelFour() {
	//Draw popcorn
	fill(255, 235, 171);
	ellipse(posXFour, posYFour - 25, 50, 50);
	ellipse(posXFour + 12, posYFour - 50, 50, 50);
	ellipse(posXFour + 25, posYFour - 12, 50, 50);
	fill(189, 128, 49);
	ellipse(posXFour + 12, posYFour - 30, 40, 25);

	//Animate popcorn and removes kernel from view
	if (posYFour > height - 46) {
		velXFour = 0;
		posYFour = height - 30;
		velYFour = 0;
		gravityFour = 0;
	}

	k4Y = height * 2;
	velYFour = velYFour + gravityFour;
	posYFour = posYFour + velYFour;
	posXFour = posXFour + velXFour;

	if (posXFour >= width - 71 || posXFour <= 47) {
		velXFour = velXFour * -1;
	}
}


function popKernelFive() {
	//Draw popcorn
	fill(255, 235, 171);
	ellipse(posXFive, posYFive - 25, 50, 50);
	ellipse(posXFive + 12, posYFive - 50, 50, 50);
	ellipse(posXFive + 25, posYFive - 12, 50, 50);
	fill(189, 128, 49);
	ellipse(posXFive + 12, posYFive - 30, 40, 25);

	//Animate popcorn and removes kernel from view
	if (posYFive > height - 46) {
		velXFive = 0;
		posYFive = height - 30;
		velYFive = 0;
		gravityFive = 0;
	}

	k5Y = height * 2;
	velYFive = velYFive + gravityFive;
	posYFive = posYFive + velYFive;
	posXFive = posXFive + velXFive;

	if (posXFive >= width - 71 || posXFive <= 47) {
		velXFive = velXFive * -1;
	}
}


function popKernelSix() {
	//Draw popcorn
	fill(255, 235, 171);
	ellipse(posXSix, posYSix - 25, 50, 50);
	ellipse(posXSix + 12, posYSix - 50, 50, 50);
	ellipse(posXSix + 25, posYSix - 12, 50, 50);
	fill(189, 128, 49);
	ellipse(posXSix + 12, posYSix - 30, 40, 25);

	//Animate popcorn and removes kernel from view
	if (posYSix > height - 46) {
		velXSix = 0;
		posYSix = height - 30;
		velYSix = 0;
		gravitySix = 0;
	}

	k6Y = height * 2;
	velYSix = velYSix + gravitySix;
	posYSix = posYSix + velYSix;
	posXSix = posXSix + velXSix;

	if (posXSix >= width - 71 || posXSix <= 47) {
		velXSix = velXSix * -1;
	}
}


function popKernelSeven() {
	//Draw popcorn
	fill(255, 235, 171);
	ellipse(posXSeven, posYSeven - 25, 50, 50);
	ellipse(posXSeven + 12, posYSeven - 50, 50, 50);
	ellipse(posXSeven + 25, posYSeven - 12, 50, 50);
	fill(189, 128, 49);
	ellipse(posXSeven + 12, posYSeven - 30, 40, 25);

	//Animate popcorn and removes kernel from view
	if (posYSeven > height - 46) {
		velXSeven = 0;
		posYSeven = height - 30;
		velYSeven = 0;
		gravitySeven = 0;
	}

	k7Y = height * 2;
	velYSeven = velYSeven + gravitySeven;
	posYSeven = posYSeven + velYSeven;
	posXSeven = posXSeven + velXSeven;

	if (posXSeven >= width - 71 || posXSeven <= 47) {
		velXSeven = velXSeven * -1;
	}
}


function popKernelEight() {
	//Draw popcorn
	fill(255, 235, 171);
	ellipse(posXEight, posYEight - 25, 50, 50);
	ellipse(posXEight + 12, posYEight - 50, 50, 50);
	ellipse(posXEight + 25, posYEight - 12, 50, 50);
	fill(189, 128, 49);
	ellipse(posXEight + 12, posYEight - 30, 40, 25);

	//Animate popcorn and removes kernel from view
	if (posYEight > height - 46) {
		velXEight = 0;
		posYEight = height - 30;
		velYEight = 0;
		gravityEight = 0;
	}

	k8Y = height * 2;
	velYEight = velYEight + gravityEight;
	posYEight = posYEight + velYEight;
	posXEight = posXEight + velXEight;

	if (posXEight >= width - 71 || posXEight <= 47) {
		velXEight = velXEight * -1;
	}
}


function popKernelNine() {
	//Draw popcorn
	fill(255, 235, 171);
	ellipse(posXNine, posYNine - 25, 50, 50);
	ellipse(posXNine + 12, posYNine - 50, 50, 50);
	ellipse(posXNine + 25, posYNine - 12, 50, 50);
	fill(189, 128, 49);
	ellipse(posXNine + 12, posYNine - 30, 40, 25);

	//Animate popcorn and removes kernel from view
	if (posYNine > height - 46) {
		velXNine = 0;
		posYNine = height - 30;
		velYNine = 0;
		gravityNine = 0;
	}

	k9Y = height * 2;
	velYNine = velYNine + gravityNine;
	posYNine = posYNine + velYNine;
	posXNine = posXNine + velXNine;

	if (posXNine >= width - 71 || posXNine <= 47) {
		velXNine = velXNine * -1;
	}
}


function popKernelTen() {
	//Draw popcorn
	fill(255, 235, 171);
	ellipse(posXTen, posYTen - 25, 50, 50);
	ellipse(posXTen + 12, posYTen - 50, 50, 50);
	ellipse(posXTen + 25, posYTen - 12, 50, 50);
	fill(189, 128, 49);
	ellipse(posXTen + 12, posYTen - 30, 40, 25);

	//Aniamte popcorn and removes kernel from view
	if (posYTen > height - 46) {
		velXTen = 0;
		posYTen = height - 30;
		velYTen = 0;
		gravityTen = 0;
	}

	k10Y = height * 2;
	velYTen = velYTen + gravityTen;
	posYTen = posYTen + velYTen;
	posXTen = posXTen + velXTen;

	if (posXTen >= width - 71 || posXTen <= 47) {
		velXTen = velXTen * -1;
	}
}


function popKernelEleven() {
	//Draw popcorn
	fill(255, 235, 171);
	ellipse(posXEleven, posYEleven - 25, 50, 50);
	ellipse(posXEleven + 12, posYEleven - 50, 50, 50);
	ellipse(posXEleven + 25, posYEleven - 12, 50, 50);
	fill(189, 128, 49);
	ellipse(posXEleven + 12, posYEleven - 30, 40, 25);

	//Animate popcorn and removes kernel from view
	if (posYEleven > height - 46) {
		velXEleven = 0;
		posYEleven = height - 30;
		velYEleven = 0;
		gravityEleven = 0;
	}

	k11Y = height * 2;
	velYEleven = velYEleven + gravityEleven;
	posYEleven = posYEleven + velYEleven;
	posXEleven = posXEleven + velXEleven;

	if (posXEleven >= width - 71 || posXEleven <= 47) {
		velXEleven = velXEleven * -1;
	}
}
