document.getElementById("convert-btn").addEventListener("click", () => {
  const numberInput = document.getElementById("number").value;
  const outputDiv = document.getElementById("output");

  // Ensure the input is a valid number
  if (!numberInput || numberInput < 1 || numberInput > 3999) {
    outputDiv.textContent = "Please enter a valid number between 1 and 3999.";
    outputDiv.classList.remove("hidden");
    return;
  }

  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let num = parseInt(numberInput, 10); // Convert input to an integer
  let romanResult = "";

  // Convert the number to Roman numerals
  romanNumerals.forEach(({ value, numeral }) => {
    while (num >= value) {
      romanResult += numeral;
      num -= value;
    }
  });

  // Display the result
outputDiv.textContent = `Roman Numeral: ${romanResult}`;
  outputDiv.classList.remove("hidden");
});