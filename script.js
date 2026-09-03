const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

const errorMessage = document.getElementById("errorMessage");


convertBtn.addEventListener("click", function () {

    const temperature = parseFloat(temperatureInput.value);

    const unit = unitSelect.value;

    errorMessage.textContent = "";

    if (temperatureInput.value.trim() === "" || isNaN(temperature)) {

        errorMessage.textContent =
            "Please enter a valid numeric temperature.";

        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    if (unit === "celsius") {

        celsius = temperature;

        fahrenheit = (celsius * 9 / 5) + 32;

        kelvin = celsius + 273.15;

    }

    else if (unit === "fahrenheit") {

        fahrenheit = temperature;

        celsius = (fahrenheit - 32) * 5 / 9;

        kelvin = celsius + 273.15;

    }

    else if (unit === "kelvin") {

        kelvin = temperature;

        celsius = kelvin - 273.15;

        fahrenheit = (celsius * 9 / 5) + 32;
    }

    if (celsius < -273.15) {

        errorMessage.textContent =
            "Temperature cannot be below absolute zero (-273.15°C).";

        return;
    }

    celsiusResult.textContent =
        `${celsius.toFixed(2)} °C`;

    fahrenheitResult.textContent =
        `${fahrenheit.toFixed(2)} °F`;

    kelvinResult.textContent =
        `${kelvin.toFixed(2)} K`;
});