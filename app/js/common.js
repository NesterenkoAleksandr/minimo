$(function() {
	// Adding handler on loading posts button
	$('.loading-posts').on('click', function() {
		const btn = $(this);
		const loader = btn.find('.spinner-border');
		$.ajax({
			url: '/minimo/app/data.html',
			type: 'GET',
			beforeSend: function() {
				btn.attr('disabled', true);
				loader.addClass('d-inline-block');
			},
			success: function(response) {
				setTimeout(function(){
					loader.removeClass('d-inline-block');
					btn.attr('disabled', false);
					$('.after-posts').before(response);
				}, 1000);
			},
			error: function() {
				loader.removeClass('d-inline-block');
				btn.attr('disabled', false);
				alert('An error occurred while trying to load posts!!!');
			}
		});
	});
});
