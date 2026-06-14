texto = "hhhhkktt";
function compactarTexto(texto){
    const noSpace = texto.replace(/\s+/g, '');
    return noSpace.replace(/(.)\1*/g, (match, letra) =>{
        return letra+match.length;
    });
    //console.log(compactarTexto(texto));
}
console.log(compactarTexto(texto));