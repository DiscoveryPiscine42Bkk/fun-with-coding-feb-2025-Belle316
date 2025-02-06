$(document).ready(function() {
    $("#calculate").click(function() {
        let num1 = $("#num1").val().trim();
        let num2 = $("#num2").val().trim();
        let operator = $("#operator").val();

        
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        
        if (isNaN(num1) || isNaN(num2)) {
            alert("Error :( ");
            return;
        }

        
        if (num1 < 0 || num2 < 0) {
            alert("Error :( ");
            return;
        }

        let result;
        if ((operator === "/" || operator === "%") && num2 === 0) {
            alert("It's over 9000!");
            return;
        }

        switch (operator) {
            case "+": result = num1 + num2; break;
            case "-": result = num1 - num2; break;
            case "*": result = num1 * num2; break;
            case "/": result = num1 / num2; break;
            case "%": result = num1 % num2; break;
        }

        alert("Result: " + result);
        console.log("Result:", result);
    });

    setInterval(() => {
        alert("Please, use me...");
    }, 30000);
});
