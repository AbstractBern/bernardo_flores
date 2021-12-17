// interactive.js to control behavior between endpoints
var image = new Array("images/image1.jpg", "images/image2.jpg", "images/image3.gif");
var count = 0;
var length = image.length - 1;
 
 
function imageSlider(index){
 
	count = count + index;
 
	if(count > length){
		count = 0;
	}
 
	if(count < 0){
		count = length;
	}
 
	document.slideshow.src = image[count];
 
	return false;
}
 
 
autoSlideShow();
 
function autoSlideShow(){
	setInterval("imageSlider(1)", 4000);
}
function show_image(src,width,height,alt) {
	var img = document.createElement("img");
	img.src = src;
	img.width = width;
	img.height = height;
	img.alt = alt;
	document.body.appendChild(img);
}