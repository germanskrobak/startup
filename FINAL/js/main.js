$(document).ready(function(){
	$('#div_artista').mouseenter(function(){
		//alert("ENTrE");
		$('#div_artista').css("background-color", "#54595C");
		
	});
	$('#div_artista').mouseleave(function(){
		$('#div_artista').css("background-color", "#343739");
	});


	$('#div_album').mouseenter(function(){
		//alert("ENTrE");
		$('#div_album').css("background-color", "#54595C");

	});
	$('#div_album').mouseleave(function(){
		$('#div_album').css("background-color", "#2A2C2E");
	});
	$('#div_cancion').mouseenter(function(){
		//alert("ENTrE");
		$('#div_cancion').css("background-color", "#54595C");
	});
	$('#div_cancion').mouseleave(function(){
		$('#div_cancion').css("background-color", "#151618");
	});

	$('#add').mouseenter(function(){
		$('#add').css("background-color","#79E54B");
	});
	$('#add').mouseleave(function(){
		$('#add').css("background-color","#5BAC38");
	});


	$('#add').click(function(){
		prompt('Ingrese el nombre de su nueva lista:');
	});

});