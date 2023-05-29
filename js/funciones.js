function calcular()
{
    var cantidad=document.getElementById("cantidad").value;

    var seleccion=document.getElementById("seleccion");
    var seleccion_activa=seleccion.options[seleccion.selectedIndex].value;

    var resultado=0

    switch(seleccion_activa=parseInt(seleccion_activa))
    {
        case 1:
            if (cantidad >0){ 
            resultado= 200*cantidad;}
            else{
                resultado = "Ingrese una cantidad valida"
            }
            break;
        case 2:
            resultado= (200-(200*0.8))*cantidad;
            break;
        case 3:
            resultado= (200-(200*0.5))*cantidad;
            break;
        case 4:
            resultado= (200-(200*0.15))*cantidad;
            break;
    }  
    
    document.getElementById("total").value=resultado;
}