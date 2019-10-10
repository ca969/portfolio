$(document).on("click", ".naccs .menu div", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".naccs .menu div").removeClass("active");
		$(".naccs ul li").removeClass("active");

		$(this).addClass("active");
		$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

		// var listItemHeight = $(".naccs ul")
		// 	.find("li:eq(" + numberIndex + ")")
		// 	.innerHeight();
		// $(".naccs ul").height(listItemHeight + "px");
	}
});


const nameText = baffle(".data-name");

nameText.set({
	characters: '░▓░ ▓██▓░ <▒░█▓ <</ ▒▒>▓/ ░<▓/ ▒▒░ ░█▓< ▓█░▓',
	speed: 120
});

nameText.start();
nameText.reveal(2000);


const jobText = baffle(".data-job");

jobText.set({
	characters: '░▓░ ▓██▓░ <▒░█▓ <</ ▒▒>▓/ ░<▓/ ▒▒░ ░█▓< ▓█░▓',
	speed: 120
});

jobText.start();
jobText.reveal(2500);