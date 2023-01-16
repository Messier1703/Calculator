function calc() {
var textType = Node.textContent ? 'textContent' : 'innerText',
    number1 = parseFloat(document.getElementById('number1').value) || 0,
    number2 = parseFloat(document.getElementById('number2').value) || 0,
    result = document.getElementById('result');
switch (document.getElementById('op').value.replace(/\s/g,'')){
    case '+':
        result[textType] = number1 + number2;
        break;
    case '-':
        result[textType] = number1 - number2;
        break;
    case '*':
        result[textType] = number1 * number2;
        break;
    case '/':
        result[textType] = number1 / number2;
        break;
    default:
        result[textType] = 'Please insert values!'
        break;
}
}