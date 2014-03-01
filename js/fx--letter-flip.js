$(function(){
	$('.fx--letter-flip').each(function(){
		var that = this;
		var characters = $(that).html().split('');
		var html = ['<span class="word">'];
		characters.forEach(function(character,i){
			if (character === ' ') {
				html.push('</span> <span class="word">');
			} else {
				html.push('<span class="fx--letter-flip__letter fx--letter-flip__letter-',i+1,'" data-letter="',character,'">',character,'</span>');
			}
		});
		html.push('</span>');
		$(that)
			.html(html.join(''));
		setTimeout(function(){
			$(that)
				.addClass('animate');
			setTimeout(function(){
				$(that)
					.removeClass('animate');
			},2000);
		},1000);
	});
});