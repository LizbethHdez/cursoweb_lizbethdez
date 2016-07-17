
function enviar_formulario(){ 
   document.formulariochido.submit() 
} 
$(document).on("ready",aceptar);
	function aceptar(){
		$("#botonaceptar").on("submit",enviar_formulario);
	}
	function enviar_formulario(){
	{
		var datosgenerales = $("#datosgen").val();
		var platillos = $("#blankCheckbox").val();
		var especificaciones = $("#areatexto").val();

		document.console(datosgenerales);
		document.console(platillos);
		document.console(especificaciones);

		if(datosgenerales==datosgen&& platillos==blankCheckbox&& especificaciones==areatexto){
			alert("");
		
		}else{
			alert("");
		}
	}




