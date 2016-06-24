/*
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});


$(document).on("ready",principal);
/*
	console.log($('p')[0].classname);
	console.log($('p').html);

function principal(){
	alert("el documento ya está listo.")
}*/
/*
function principal(){
	$(".titulo-principal").on("click",bienvenida);
}
function bienvenida(){
	$(".contenedor-bienvenida").html("hola Bienvenido");
}
*/


$(document).on("ready",principal);

function principal(){
	$("#enviar").on("click", validarSesion);
}

function validarSesion(){
	var usuario = $("#nombre").val();

	$("#contenedor").html("Bienvenido(a)"+usuario);
}



