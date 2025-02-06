
        function calculate() {
            let num1 = parseFloat(document.getElementById("num1").value) ?? 0;
            let num2 = parseFloat(document.getElementById("num2").value) ?? 0;
            let operation = document.getElementById("operation").value;
            let discountChecked = document.getElementById("discount").checked;
            let result;

            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById("result").innerText = "Please enter valid numbers.";
                return;
            }

            switch (operation) {
                case "+": result = num1 + num2; break;
                case "-": result = num1 - num2; break;
                case "*": result = num1 * num2; break;
                case "/": result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
                case "%": result = num2 !== 0 ? num1 % num2 : "Cannot modulus by zero"; break;
                case "^": result = Math.pow(num1, num2); break;
                default: result = "Invalid operation";
            }

            if (typeof result === "number" && discountChecked) {
                result *= 0.9;
            }

            let comparison = result > 100 ? "greater than 100" : result < 100 ? "less than 100" : "exactly 100";
            document.getElementById("result").innerText = `Result: ${result} (It is ${comparison})`;
        }
