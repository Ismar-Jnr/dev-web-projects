export function notANumber(value){
    return isNaN(value) || value == "" //faz a validação de dados, aceitando apenas numeros;
}


export function calculateIMC(weight, height){
    return (weight/((height /100) ** 2)).toFixed(2);
}