function calcular()
{
    var cantidad=document.getElementById("cantidad").value;
    var seleccion=document.getElementById("seleccion");
    var seleccion_activa=seleccion.options[seleccion.selectedIndex].value;
    var resultado=0 
    
    var nom=document.getElementById('nombre').value;
    var ed=document.getElementById('apellido').value;
    var mail=document.getElementById('mail').value

    if (nom == ""){
        alert('Ingrese su nombre');  
    }
    if (ed == ""){
        alert('Ingrese su apellido');
    }
    if (mail == ""){
        alert('Ingrese su mail');
    }
    if (cantidad == "" || cantidad <= 0){
        alert('Ingrese una cantidad mayor a cero');
    }
        
    
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
                if (cantidad >0){
                    resultado= (200-(200*0.8))*cantidad;}
                    else{
                        resultado = "Ingrese una cantidad valida"
                    }
                break;
            case 3:
                if (cantidad >0){
                    resultado= (200-(200*0.5))*cantidad;}
                    else{
                        resultado = "Ingrese una cantidad valida"
                    }
                break;
            case 4:
                if (cantidad >0){
                    resultado= (200-(200*0.15))*cantidad;}
                    else{
                        resultado = "Ingrese una cantidad valida"
                        
                    }
                break;
        }  
        document.getElementById("total").value=resultado;
    }
    


function borrar()
{
    document.getElementById("cantidad").value=""
    document.getElementById("total").value="";
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("mail").value="";
}