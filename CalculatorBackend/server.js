const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000; 
app.use(cors());
app.use(bodyParser.json());

app.post("/calculate", (req, res) => {
    const { firstNumber, secondNumber, operation } = req.body;

    let result;
    console.log("Data send");
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operation";
            break;
    }


    res.json({ result });
});
app.listen(port, () => {
    console.log(`Server is running on http://192.168.0.134:${port}`);
});
