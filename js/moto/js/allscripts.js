

$(document).ready ( function () {
	
	//houm 92
	//галерея
$('#small a').click (function (eventObject) {
/*Замена картинкиif*/ if ($('#big img').attr('src') !=$(this).attr('href'))	{	
		
		$('#big img').hide().attr ('src',$(this).attr('href'));
		$('#big img').load(function () {
			$(this).fadeIn(3000);
		});
		}
		eventObject.preventDefault();
		
	});
	
	//переключатель показать / скрыть	
	/*
	$('#switchGal').hover (function() {
		
		$('#gallery').slideDown(2000);	
	},
	function() {
		$('#gallery').slideUp(2000);
	});
	*/
	
	$('#small a img').click ( function () {
		$('#small a img').fadeTo(2000, 1);
		$(this).fadeTo(2000, 0.6);
	});

	//houm 98
	//проверка email адреса пользователя
	var myEmail = $('#email');
	var regV = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
	
	$('#email').focus(function () {
		if ($(this).val() == $(this).attr("defaultValue")){
			$(this).val('');
		}
	});
	$('#email').blur(function () {

		var userEmail = $(this).val();
			
		if (userEmail == "") {
			$(this).val($(this).attr('defaultValue')).css ('border','2px solid #cccccc');
		}
		else if (userEmail.search(regV) == -1) {
			$(this).css('border','2px solid #cc0000');
		}
		else {
			$(this).css('border','2px solid #00cc00');
		} 
	});
	//Блокировка кнопки
		$('#my_button').click ( function () {
			$(this).attr("disabled",'disabled');
			$(this).attr("value",'Отправляю . . .');
			
		});
	
	//Подключение календарика 		
		 $( "#date" ).datepicker({
      changeMonth: true,
      changeYear: true 
    });
	/*Русификатор календарика*/
/*
	$.datepicker.regional['uk'] = {
		closeText: 'Закрити',
		prevText: '&#x3C;',
		nextText: '&#x3E;',
		currentText: 'Сьогодні',
		monthNames: ['Січень','Лютий','Березень','Квітень','Травень','Червень',
		'Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
		monthNamesShort: ['Січ','Лют','Бер','Кві','Тра','Чер',
		'Лип','Сер','Вер','Жов','Лис','Гру'],
		dayNames: ['неділя','понеділок','вівторок','середа','четвер','п’ятниця','субота'],
		dayNamesShort: ['нед','пнд','вів','срд','чтв','птн','сбт'],
		dayNamesMin: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
		weekHeader: 'Тиж',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['uk']);
*/	

	//Подключение  slider
	
	$( "#slider-range" ).slider({
      range: true,
      min: 10,
      max: 1000, 
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] + " km" );
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) + " km");
 
	
	
});
	
	
	
	