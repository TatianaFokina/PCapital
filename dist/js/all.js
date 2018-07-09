// Select
$(function(){
	var	$controll = ".select__control",
		$dropdown = ".select__dropdown",
		$controll__openedClass = "js-opened",
		$item = ".select__dropdown-item";

	// Click to select
	$($controll).click(function(){
		$($controll).not(this).next($dropdown).hide(); // close all drop dawns except current item
		$($controll).not(this).removeClass($controll__openedClass); // delete all classes of close select except current item

		$(this).toggleClass($controll__openedClass);
		$(this).next($dropdown).toggle();
	});
	// Click to item (close select)
	$($item).click(function(){
		$(this).closest('.select').children($controll).toggleClass($controll__openedClass); // remove class of open select
		$(this).closest($dropdown).toggle(); // close
	});
});