$(document).ready(function(){
	var selector = $('input[name="selector"]');
	var property = $('input[name="property"]');
	var value = $('input[name="value"]');
	$('form').on('click', function(e){
		e.preventDefault;
		e.stopPropagation();
		$(selector.val()).css(property.val(), value.val());
		return false;
	});
});