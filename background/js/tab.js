$(function() {
	var $tabs = $('#tabs .btn-tab');
	var $initialTab = $('.btn-default');

	var tabClickHandler = function() {
		$tabs.removeClass('btn-default');
		$tabs.addClass('btn-primary');
		$(this).removeClass('btn-primary');
		$(this).addClass('btn-default');
		$(this).blur();
	}

	$tabs.on('click', tabClickHandler);
});
