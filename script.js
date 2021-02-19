let persona = [];
function nuevapersona() {
let persona = {}
persona.nombre = prompt("Nombre :")
persona.apellido = prompt("Apellido :")
persona.mes = prompt("mes de nacimiento :")
persona.ano = prompt("año de nacimiento: ")
return persona;
}
////const genex = ['bavby Boomers', 'Generacion X', 'Generacion  Y', 'Generacion Z'];
console.table(
   
    { "Nombre ":  persona.nombre,
    "Apellido ": persona.apellido,
    "Mes de cumple" : persona.mes,
    "ano de naciomiento": persona.ano
    }

);
/*if ((2020-persona.ano)) <= 1964)
{
    persona.generacion = genex[0];
}    
    else {
        if (  ((2020-parseFloat(persona.ano)) <= 1976) && ((2020-parseFloat(persona.ano)) >= 1965))
            {
                persona.generacion = genex[1]; 
            }
        
        else{
            if (  ((2020-parseFloat(persona.ano))<=1999) && ((2020-parseFloat(persona.ano))>=1980))
            {
                persona.generacion = genex[2];  
            }
            else{
                if (  ((2020-parseFloat(persona.ano))>=2000) )
                {
                    persona.generacion = genex[3];  
                }
            }}}
console.table(
   {
        



   }


)*/


console.log(persona);
