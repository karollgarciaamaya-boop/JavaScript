function calcular(){
    let horasTrabajadas=parseInt(document.getElementById(`horas`).value);
    let valorHora=parseFloat(document.getElementById(`valor`).value);
    let Salario=horasTrabajadas*valorHora;
    document.getElementById("salario").value=Salario.toLocaleString();
};