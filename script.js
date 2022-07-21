let input1 = document.querySelector('.input .from h1');
let div1 = document.querySelector('.input .to h1');
let numberInput = document.querySelector('.input .from .numberInput');
let result = document.querySelector('.result');
let regex = new RegExp('^[0-1]+$');

const convert = ()=> {
    if(input1.className == 'binary' && regex.test(numberInput.value)){
        convertToDecimal();        
    } else if(input1.className == 'decimal' && !isNaN(numberInput.value)) {
        convertToBinary();
    }
    else {
        result.innerHTML = 'Numero Inváido!';
    }
}

const reverseButton = () => {
    numberInput.value = '';
    result.innerHTML = '';
    if(input1.className == 'binary'){
        input1.className = 'decimal';
        div1.className = 'binary';
        input1.innerHTML = 'Decimal';
        div1.innerHTML = 'Binário';
    } else{
        input1.className = 'binary';
        div1.className = 'decimal';
        input1.innerHTML = 'Binário';
        div1.innerHTML = 'Decimal';
    }
}
const convertToDecimal = () =>{
    let input = document.querySelector('.numberInput').value;
    let convert = 0;
    let temp;
    input = reverse(input);
    for(let i = 0; i < input.length; i++){
        temp = parseInt(input[i]);
        convert += temp * Math.pow(2, i);
    }
    document.querySelector('.result').innerHTML = convert;
}
const convertToBinary = () =>{
    let input = document.querySelector('.numberInput').value;
    if(input == '0'){
        document.querySelector('.result').innerHTML = '0';
    } else {
        let result;
        let div = parseInt(input);
        result = (div % 2 == 1 ? 1: 0);
        result.toString;
        while(div >= 2){
            div = parseInt(div / 2);
            result += (div % 2).toString();
        }
        document.querySelector('.result').innerHTML= reverse(result);
    }
}
const reverse = (s) =>{
    let aux = '';
    for(let i = s.length - 1; i >= 0; i--){
        aux += s[i];
    }
    return aux;
}