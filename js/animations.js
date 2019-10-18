var myTitle = document.querySelector("#title");
myTitle.addEventListener("click", doSomething, false);
function doSomething(e) {
  alert("Is this working?");
}

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

	ctx.strokeStyle ="#ffffff";
	ctx.lineWidth = 5;
	ctx.beginPath();
	ctx.arc(400,190,150,0,degreesToRadians(180), true);
	
	ctx.stroke();

function degreesToRadians(degrees){
	return (degrees * Math.PI) / 180;
}

$(document).ready(function(){
	$(window).scroll(function(){
		console.log("hello");
		$('.slideinleft').each(function(i){

			var bottom_of_element = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			if(bottom_of_window > bottom_of_element ){
				$(this).animate({'margin-left':'150px'},1500);
			}
		});
		$('.slideinbottom').each(function(i){
			var bottom_of_element = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			if(bottom_of_window > bottom_of_element){
				$(this).animate({'margin-top':'0'},1000);
			}
		});
	});
});