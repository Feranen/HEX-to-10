const hex = document.getElementById('HEX');
const resultDisplay = document.getElementById('result');
const resultLabel = document.getElementById('test');

function calculate(){
    let numbers = document.getElementById("input").value
    array = numbers.split('')

    let updatedArray = array.map(char => {
        switch(char.toUpperCase()) {
            case 'A': return 10;
            case 'B': return 11;
            case 'C': return 12;
            case 'D': return 13;
            case 'E': return 14;
            case 'F': return 15;
            default: return parseInt(char, 10);
        }
    });
    let result = updatedArray.reduce((acc, val, index) => {
        let power = updatedArray.length - 1 - index;
        return acc + val * Math.pow(16, power);
    }, 0);
    resultDisplay.textContent = `${result}`;

}

hex.addEventListener('click', () => calculate())
