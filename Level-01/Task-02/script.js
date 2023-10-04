document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperatureInput");
    const unitSelector = document.getElementById("unitSelector");
    const convertButton = document.getElementById("convertButton");
    const resultArea = document.getElementById("resultArea");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelector.value;
        let convertedTemperature = 0;
        let unitName = "";

        if (isNaN(temperature)) {
            resultArea.innerText = "Please enter a valid number.";
            return;
        }

        switch (unit) {
            case "celsius":
                convertedTemperature = (temperature - 32) * (5/9);
                unitName = "Celsius";
                break;
            case "fahrenheit":
                convertedTemperature = (temperature * 9/5) + 32;
                unitName = "Fahrenheit";
                break;
            case "kelvin":
                convertedTemperature = temperature + 273.15;
                unitName = "Kelvin";
                break;
        }

        resultArea.innerText = `Converted temperature: ${convertedTemperature.toFixed(2)} ${unitName}`;
    });
});
