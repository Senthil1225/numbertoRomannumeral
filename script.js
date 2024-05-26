function convertToRoman(num) {
  const romanSymbols = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (let i = 0; i < romanSymbols.length; i++) {
    while (num >= romanSymbols[i].value) {
      result += romanSymbols[i].symbol;
      num -= romanSymbols[i].value;
    }
  }

  return result;
}

function convertAndDisplay() {
  const userInput = document.getElementById("numberInput").value;
  const num = parseInt(userInput);

  if (!isNaN(num)) {
    const romanNumeral = convertToRoman(num);
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = JSON.stringify({
      input: num,
      romanNumeral: romanNumeral,
    });
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
}
