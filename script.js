$(document).ready(function() {
 

 	$("p").click(function() {
		$("p").css("color", "red");
	});

	$("hr").hover(function() {
		$("hr").css('background-color', 'lightblue');	
   });

	$("#hr_html").hover(function() {
		$("#hr_mysql").css('font-size', '1 rem');
		$("#hr_python").css('font-size', '1 rem');
		$("#hr_jquery").css('font-size', '1 rem');
		$("#hr_django").css('font-size', '1 rem');
		$("#hr_css").css('font-size', '1 rem');	
		$("#hr_html").css('font-size', '2 rem');	
	});

	$("#hr_mysql").hover(function() {
		$("#hr_mysql").css('font-size', '2 rem');	
		$("#hr_python").css('font-size', '1 rem');
		$("#hr_jquery").css('font-size', '1 rem');
		$("#hr_django").css('font-size', '1 rem');
		$("#hr_css").css('font-size', '1 rem');	
		$("#hr_html").css('font-size', '1 rem');	
	});

	$("#hr_python").hover(function() {
		$("#hr_mysql").css('font-size', '1 rem');	
		$("#hr_python").css('font-size', '2 rem');
		$("#hr_jquery").css('font-size', '1 rem');
		$("#hr_django").css('font-size', '1 rem');
		$("#hr_css").css('font-size', '1 rem');	
		$("#hr_html").css('font-size', '1 rem');	
	});

	$("#hr_jquery").hover(function() {
		$("#hr_mysql").css('font-size', '1 rem');	
		$("#hr_python").css('font-size', '1 rem');
		$("#hr_jquery").css('font-size', '2 rem');
		$("#hr_django").css('font-size', '1 rem');
		$("#hr_css").css('font-size', '1 rem');	
		$("#hr_html").css('font-size', '1 rem');	
	});

	$("#hr_django").hover(function() {
		$("#hr_mysql").css('font-size', '1 rem');	
		$("#hr_python").css('font-size', '1 rem');
		$("#hr_jquery").css('font-size', '1 rem');
		$("#hr_django").css('font-size', '2 rem');
		$("#hr_css").css('font-size', '1 rem');	
		$("#hr_html").css('font-size', '1 rem');	
	});

	$("#hr_css").hover(function() {
		$("#hr_mysql").css('font-size', '1 rem');	
		$("#hr_python").css('font-size', '1 rem');
		$("#hr_jquery").css('font-size', '1 rem');
		$("#hr_django").css('font-size', '1 rem');
		$("#hr_css").css('font-size', '2 rem');	
		$("#hr_html").css('font-size', '1 rem');	
	});

	$(".bottom_button").mouseenter(function() {
		$("body").css('background-color', 'black');	
   	});

   	$(".bottom_button").mouseleave(function() {
		$("body").css('background-color', 'grey');	
	});


	$("#html_btn").click(function() {
		$("#html_btn").hide("medium");
	});


	$("#html_btn").click(function() {
		$("#text1_p").slideToggle(1000);
	});

	$("#sql_btn").click(function() {
		$("#text2_p").slideToggle(1000);
	});

	$("#python_btn").click(function() {
		$("#text3_p").slideToggle(1000);
	});

	$("#jquery_btn").click(function() {
		$("#text4_p").slideToggle(1000);
	});

	$("#django_btn").click(function() {
		$("#text5_p").slideToggle(1000);
	});

	$("#css_btn").click(function() {
		$("#text6_p").slideToggle(1000);
	});




	$("#html_btn").mouseenter(function() {
		$("#text1_p").fadeTo(1000, 0.5);
	});
	$("#html_btn").mouseleave(function() {
		$("#text1_p").fadeTo(1000, 1);
	});

	$("#sql_btn").mouseenter(function() {
		$("#text2_p").fadeTo(1000, 0.5);
	});
	$("#sql_btn").mouseleave(function() {
		$("#text2_p").fadeTo(1000, 1);
	});

	$("#python_btn").mouseenter(function() {
		$("#text3_p").fadeTo(1000, 0.5);
	});
	$("#python_btn").mouseleave(function() {
		$("#text3_p").fadeTo(1000, 1);;
	});

	$("#jquery_btn").mouseenter(function() {
		$("#text4_p").fadeTo(1000, 0.5);
	});
	$("#jquery_btn").mouseleave(function() {
		$("#text4_p").fadeTo(1000, 1);
	});

	$("#django_btn").mouseleave(function() {
		$("#text5_p").fadeTo(1000, 0.5);
	});
	$("#django_btn").click(function() {
		$("#text5_p").fadeTo(1000, 1);
	});
	$("#css_btn").mouseenter(function() {
		$("#text6_p").fadeTo(1000, 0.5);
	});
	$("#css_btn").mouseleave(function() {
		$("#text6_p").fadeTo(1000, 1);
	});
}); 
