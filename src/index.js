module.exports = function toReadable (number) {
    const dictionary = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "ninety"
    };
    if(number.toString() in dictionary) {
        return dictionary[number.toString()];
    }
    if(number < 100) {
         let b = number % 10;
         let c = number - b;
         return (dictionary[c.toString()] + " " + dictionary[b.toString()]).replace(" zero", "");
    }
    else
    {
        let b = number % 100;

        let d = number.toString()[0];
        if(b.toString() in dictionary) {
            return (dictionary[d.toString()] + " hundred " + dictionary[b.toString()]).replace(" zero", "");
        }
        else {
            let b = number % 10;
            let c = (number - b) % 100;
            return (dictionary[d.toString()] + " hundred " + dictionary[c.toString()] + " " + dictionary[b.toString()]).replace(" zero", "");
        }
    }
  
}
