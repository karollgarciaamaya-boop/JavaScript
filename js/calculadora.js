function sumar(){
    let num1=parseInt(document.getElementById(`numero1`).value);
    let num2=parseInt(document.getElementById(`numero2`).value);
    let suma=num1+num2;

    document.getElementById("resultado").value=suma;
};
function restar(){
    let num1=parseInt(document.getElementById(`numero1`).value);
    let num2=parseInt(document.getElementById(`numero2`).value);
    let resta=num1-num2;

    document.getElementById("resultado").value=resta;

}
function multiplicar(){
    let num1=parseInt(document.getElementById(`numero1`).value);
    let num2=parseInt(document.getElementById(`numero2`).value);
    let multi=num1*num2;

    
    document.getElementById("resultado").value=multi;

}
function dividir(){
    let num1=parseInt(document.getElementById(`numero1`).value);
    let num2=parseInt(document.getElementById(`numero2`).value);
    let divi=num1/num2;
    document.getElementById("resultado").value=divi;
}