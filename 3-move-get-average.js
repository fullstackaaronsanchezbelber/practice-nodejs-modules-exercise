/** Leer README */

const arr = [1, 2, 3];

function getAvgFromArray(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log(sum);
        return sum/arr.length
    }

const avg = getAvgFromArray(arr);
console.log(`La media del array es: ${avg}`);

function getRandomElementFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = { getRandomElementFromArray, getAvgFromArray }