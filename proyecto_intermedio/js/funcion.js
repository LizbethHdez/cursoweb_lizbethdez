$(document).on("ready");
/*function enviar(){
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


function datosFormulario(){
	$("#botonaceptar").on("click",datosRegistrados);
}	
function datosRegistrados(){
	window.location="mesero.html";
}
*/

botones= document.forms["elegir"].elements["palomita"];
valor=botones[0].checked

function info() {
         pulsado = document.elegir.palomita;
         for (i=0; i<pulsado.length; i++) {
         valor = pulsado[i].checked;
              if (valor == true) {
                 elegido = pulsado[i];
                 }
              }
         return elegido;
         }
