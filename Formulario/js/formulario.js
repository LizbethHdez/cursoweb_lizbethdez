var usuario ="cuentaproteco@gmail.com";
var pass ="hola"

$(document).on("ready",enviar);

	function enviar(){
		$("#envio").on("click",validarUsuario);
	}
	function validarUsuario(){
		var correo = $("#usuario").val();
		var contra = $("#pass").val();

		if(correo==usuario&& contra==pass){
			alert("Has iniciado sesión");
			window.location="https://www.google.com.mx";
		}else{
			alert("Verifica tus datos");
		}
	}