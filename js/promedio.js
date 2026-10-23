function calcular(){
    let Nota1=parseFloat(document.getElementById(`nota1`).value);
    let Nota2=parseFloat(document.getElementById(`nota2`).value);
    let Nota3=parseFloat(document.getElementById(`nota3`).value);
    let Promedio=(Nota1+Nota2+Nota3)/3;
    document.getElementById("promedio").value=Promedio.toFixed(1);
};