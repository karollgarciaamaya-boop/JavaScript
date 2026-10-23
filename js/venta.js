
function calcular(){
    let cantidad=parseInt(document.getElementById(`cantidad`).value);
    let preciounitario=parseInt(document.getElementById(`precio`).value);
    let subTotal=preciounitario*cantidad;
    document.getElementById("subtotal").value=subTotal.toLocaleString();
    let IVA=subTotal*0.19;
    document.getElementById("iva").value=IVA.toLocaleString();
    let Descuento=subTotal*0.10;
    document.getElementById("descuento").value=Descuento.toLocaleString();
    let Totalpagar=subTotal+IVA-Descuento;
    document.getElementById("total").value=Totalpagar.toLocaleString();



};