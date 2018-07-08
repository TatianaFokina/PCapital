

// Select
$(function(){
	var	$controll = ".select__control",
		$dropdown = ".select__dropdown",
		$controll__openedClass = "js-opened",
		$item = ".select__dropdown-item";

	// Клик на селекте
	$($controll).click(function(){
		$($controll).not(this).next($dropdown).hide(); // Закрывает все дропдауны (кроме этого)
		$($controll).not(this).removeClass($controll__openedClass); // удаляет все классы открытого селекта (кроме этого)

		$(this).toggleClass($controll__openedClass);
		$(this).next($dropdown).toggle();
	});
	// Клик на айтеме (закрывает селект)
	$($item).click(function(){
		$(this).closest('.select').children($controll).toggleClass($controll__openedClass); // Убирает класс открытого селекта
		$(this).closest($dropdown).toggle(); // Закрывает
	});
});