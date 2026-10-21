const formulario = documento.getElementById("formulario");

formulario.addEvenListener("sumit", function(event) {
    event.prevenDefault();
    
})
if(confirm("Estas seguro de realizar la cotización?")){
    alert ("Cotizacion confirmada")
}