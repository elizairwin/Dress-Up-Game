$(document).ready(function() {
	function imageCycler(choices, i) {
		i = 0;
		this.Next = function() {
			hide_current_image();
			show_next_image();
		}
		var hide_current_image = function() {
			if (choices) {
				choices[i].style.visibility = "hidden";
				i += 1;
			}
		}
		var show_next_image = function() {
			if (choices) {
				if (i == (choices.length)) {
					i = 0;
				}
				choices[i].style.visibility = "visible";
			}
		}
	}
	var pants = $(".pant");
	var shirts = $(".shirt");
	var shirt_picker = new imageCycler(shirts);
	$("#shirt_button").on("click", function() {
		shirt_picker.Next();
	});
	var pants_picker = new imageCycler(pants);
	$("#pant_button").on("click", function() {
		pants_picker.Next();
	});
});
$("#shirt_button").click(function() {
	$("#shirt-menu").css("visibility", "visible");
});