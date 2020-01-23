const romanNumArr = [{ "romanNum": "M", "decimalMum": 1000 }, { "romanNum": "CM", "decimalMum": 900 },
{ "romanNum": "D", "decimalMum": 500 }, { "romanNum": "CD", "decimalMum": 400 }, { "romanNum": "C", "decimalMum": 100 },
{ "romanNum": "XC", "decimalMum": 90 }, { "romanNum": "L", "decimalMum": 50 }, { "romanNum": "XL", "decimalMum": 40 },
{ "romanNum": "X", "decimalMum": 10 }, { "romanNum": "IX", "decimalMum": 9 }, { "romanNum": "V", "decimalMum": 5 },
{ "romanNum": "IV", "decimalMum": 4 }, { "romanNum": "I", "decimalMum": 1 }]

function decimalRoman(num) {
    if (num <= 0 || num >= 4000) {
        return num;
    }

    let romanStr = "";
    for (let i = 0; i < romanNumArr.length; i++) {
        let fits = Math.floor(num / romanNumArr[i].decimalMum)
        if (fits > 0) {
            while (fits > 0) {
                romanStr += romanNumArr[i].romanNum;
                num -= romanNumArr[i].decimalMum;
                fits--
            }
        }
    }
    return romanStr;
}

export default decimalRoman;
