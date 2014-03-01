// var start_color = new less.tree.Color([255,209,0],0.1);
var start_color = start_color || [255,165,0,0.5];
// var start_color = start_color || [165,165,165,0.5];
start_color = new less.tree.Color([start_color[0],start_color[1],start_color[2]],start_color[3]);
var color_offset = color_offset || 130;

$(function(){
	$intervals = $('.container h1, .container h2, .container h3');

	var container_outer_height = $('.container').outerHeight();
	var container_padding = parseInt($('.center-piece').css('padding'));

	function create_background_strips() {
		var offsets = [];
		$intervals.each(function(){
			offsets.push($(this).offset().top);
		});

		var heights = [];
		var sum = 0;
		for (var i = 1; i < offsets.length; i++) {
			var height = offsets[i] - offsets[i-1];
			heights.push(height);
			sum += height;
		}
		heights[0] += container_padding/2;
		heights.push(container_outer_height - sum);

		var html = [];
		heights.forEach(function(height,i){
			html.push(
				'<div class="background-strip" style="height:',
				height,
				'px;background-color:',
				less.tree.functions.spin(start_color, {value:i*color_offset}).toCSS(),
				'"></div>'
			);
		});
		$('.background-strips').html(html.join(''));
	}
	create_background_strips();

	setInterval(function(){
		var new_container_outer_height = $('.container').outerHeight();
		if (new_container_outer_height !== container_outer_height) {
			container_outer_height = new_container_outer_height;
			create_background_strips();
		}
	}, 1000);
});