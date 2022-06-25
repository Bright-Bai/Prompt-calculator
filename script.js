let firstNumber = parseInt(prompt("Enter the first number"));
let operator = prompt("Choose operator");

let secondNumber = parseInt(prompt("Enter the second number"));

calculate();

function calculate(){
    if(operator == "+"){
        let result = parseInt(firstNumber) + parseInt(secondNumber);
        alert("The sum of the given numbers is: " + result);

    }

    else if(operator == "-"){
        let result = parseInt(firstNumber) - parseInt(secondNumber);
        alert("The difference of the given numbers is: " + result);

    }

    else if(operator == "*"){
        let result = parseInt(firstNumber) * parseInt(secondNumber);
        alert("The product of the given numbers is: " + result);

    }

    else if(operator == "/"){
        let result = parseInt(firstNumber) / parseInt(secondNumber);
        alert("The quotient of the given numbers is: " + result);

    }

    else{
        alert(operator + "is not a valid operator.")
    }
}
