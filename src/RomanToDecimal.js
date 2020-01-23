import decimalRoman from './DecimalToRoman'

const romanNumObj = {
    "I": 1,
    "V": 5,
    "IV": 4,
    "X": 10,
    "IX": 9,
    "L": 50,
    "XL": 40,
    "C": 100,
    "XC": 90,
    "D": 500,
    "CD": 400,
    "M": 1000,
    "CM": 900,
}

function romanNumeralsDecimal(a) {
    if (romanNumObj.hasOwnProperty(a)) {
        return romanNumObj[a];
    }

    let res = 0;
    const items = a.split("");

    for (let i = 0; i < items.length; i++) {
        if (romanNumObj.hasOwnProperty(items[i])) {
            if (romanNumObj[items[i]] < romanNumObj[items[i + 1]]) {
                res -= romanNumObj[items[i]];
                i++
            }
            res += romanNumObj[items[i]];
        }
    }

    if (decimalRoman(res) !== a) {
        return "wrong roman numerals"
    }
    return res;
}

export default romanNumeralsDecimal;