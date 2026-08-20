

// function to add numbers and operators

function addInput(value) {

    const result = document.getElementById("result");
    result.value = (result.value === "0") ? value : result.value + value;

}

// function to clear the input

function clearResult() {

    document.getElementById("result").value = "0";

}

// function to calculate the result

function calculateResult() {

    const result = document.getElementById("result");
    const expression = result.value;
    

// check for invalid characters

    if (/[^0-9+\-*/().\s]/.test(expression)) {

        result.value = "Error";
        return;

    }

// evaluate the expression

    let calculated = eval(expression);

 // check if result is valid or not

    result.value = (isFinite(calculated)) ? calculated : "Error";
    
}
