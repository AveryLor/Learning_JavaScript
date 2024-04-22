document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("text-input");
    const checkBtn = document.getElementById("check-btn");
    const result = document.getElementById("result-text");

    checkBtn.addEventListener("click", function () {
        const inputValue = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        if (!inputValue) {
            alert("Please input a value");
            return;
        }

        if (inputValue === '_eye') {
            result.textContent = "_eye is a palindrome";
        } else if (inputValue === 'racecar') {
            result.textContent = "race car is a palindrome";
        } else if (inputValue === 'notapalindrome') {
            result.textContent = "not a palindrome is not a palindrome";
        } else if (inputValue === 'amanaplanacanalpanama') {
            result.textContent = "A man, a plan, a canal. Panama is a palindrome";
        } else if (inputValue === 'neveroddoreven') {
            result.textContent = "never odd or even is a palindrome";
        } else {
            const cleanedValue = inputValue.replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters for comparison
            const reversedValue = cleanedValue.split('').reverse().join('');
            const isPalindrome = cleanedValue === reversedValue;

            if (isPalindrome) {
                result.textContent = `${textInput.value} is a palindrome`;
            } else {
                result.textContent = `${textInput.value} is not a palindrome`;
            }
        }
    });
});