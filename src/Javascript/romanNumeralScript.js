document.addEventListener('DOMContentLoaded', function () {
    const numberInput = document.getElementById('number');
    const convertButton = document.getElementById('convert-btn');
    const outputDiv = document.getElementById('output');
  
    convertButton.addEventListener('click', function () {
      const inputValue = parseInt(numberInput.value);
  
      if (isNaN(inputValue)) {
        outputDiv.textContent = 'Please enter a valid number';
      } else if (inputValue >= 4000) {
        outputDiv.textContent = 'Please enter a number less than or equal to 3999';
      } else if (inputValue < 1) {
        outputDiv.textContent = 'Please enter a number greater than or equal to 1'; 
  
      } else {
        outputDiv.textContent = convertToRoman(inputValue);
      }
    });
  
    function convertToRoman(num) {
      const romanNumeralMap = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
      ];
  
      let result = '';
  
      for (let i = 0; i < romanNumeralMap.length; i++) {
        while (num >= romanNumeralMap[i].value) {
          result += romanNumeralMap[i].numeral;
          num -= romanNumeralMap[i].value;
        }
      }
  
      return result;
    }
  });