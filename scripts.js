// control flow

// aula 1 - if e else
/*
let temperature = 36.5
let hightTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (hightTemperature){
    console.log('Febre alta')
} else if (mediumTemperature){
    console.log('febre moderada')
} else {
    console.log('Saudável')
} 
*/

// aula 2 - switch

/*let expression = ''

switch (expression){
    case 'a':
        // codigo
        console.log('a')
        break
    case 'b':
        // codigo b
        console.log('b')
        break
    default:
        console.log('default')
        break
}*/
/*
function calculate (number1, operator, number2){
    let result = 0;

    switch (operator){
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }
    return result
}

console.log(calculate(4, '+', 8))*/

// aula 3 - throw

function sayMyName(name = ''){
    if(name === ''){
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

// try...catch

try{
    sayMyName('Lucas')
} catch(e){
    console.log(e)
}