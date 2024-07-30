module.exports = function toReadable(number) {
    let str = number.toString();
    let res = '';
    let hundreds = '';
    let tens = '';
    let ones = '';
    let reminderOfTens = 0;
    let reminderOfHundred = 0;
    let reminderOfOnes = 0;
    if (number >= 0 && number < 10) {
        res = forOneNine(str);
    }
    else if (number >= 10 && number < 20) {
        res = forElevenNineteen(str);
    }
    else if (number >= 20 && number < 100) {
        tens = Math.floor((number / 10)).toString();
        ones = (number % 10).toString();
        res = res + forTenNinety(tens);
        if (ones > 0) {
            res = res + forOneNine(ones);
        }
    }
    else if (number >= 100 && number < 1000) {
        hundreds = Math.floor((number / 100)).toString();
        res = res + forOneNine(hundreds);
        res = res + forHundred();
        reminderOfHundred = Math.floor(number % 100);
        reminderOfTens = Math.floor((number % 100) / 10);
        reminderOfOnes = Math.floor(number % 10);
        if (reminderOfHundred >= 20) {
            tens = reminderOfTens.toString();
            res = res + forTenNinety(tens);
            if (reminderOfOnes > 0) {
                ones = reminderOfOnes.toString();
                res = res + forOneNine(ones);
            }
        }
        else if (reminderOfHundred >= 10 && reminderOfHundred < 20) {
            tens = reminderOfHundred.toString();
            res = res + forElevenNineteen(tens);
        } else if (reminderOfHundred > 0 && reminderOfHundred < 10) {
            ones = reminderOfOnes.toString();
            res = res + forOneNine(ones);
        }
    }
    res = res.slice(0, -1);
    return res;
}

function forOneNine(str) {
    switch (str) {
        case '1':
            return 'one ';
        case '2':
            return 'two ';
        case '3':
            return 'three ';
        case '4':
            return 'four ';
        case '5':
            return 'five ';
        case '6':
            return 'six ';
        case '7':
            return 'seven ';
        case '8':
            return 'eight ';
        case '9':
            return 'nine ';
        default:
            return 'zero ';
    }
}

function forElevenNineteen(str) {
    switch (str) {
        case '10':
            return 'ten ';
        case '11':
            return 'eleven ';
        case '12':
            return 'twelve ';
        case '13':
            return 'thirteen ';
        case '14':
            return 'fourteen ';
        case '15':
            return 'fifteen ';
        case '16':
            return 'sixteen ';
        case '17':
            return 'seventeen ';
        case '18':
            return 'eighteen ';
        default:
            return 'nineteen ';
    }
}

function forTenNinety(str) {
    switch (str) {
        case '1':
            return 'ten ';
        case '2':
            return 'twenty ';
        case '3':
            return 'thirty ';
        case '4':
            return 'forty ';
        case '5':
            return 'fifty ';
        case '6':
            return 'sixty ';
        case '7':
            return 'seventy ';
        case '8':
            return 'eighty ';
        default:
            return 'ninety ';
    }
}

function forHundred() {
    return 'hundred ';
}
