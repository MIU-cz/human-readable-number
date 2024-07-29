module.exports = function toReadable(number) {
    if (number === 0) return 'zero';

    const toTwenty = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];

    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    const hundreds = [
        '', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 
        'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'
    ];

    function toWords(n) {
        if (n < 20) {
            return toTwenty[n];
        } else if (n < 100) {
            return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ' ' + toTwenty[n % 10] : '');
        } else {
            return hundreds[Math.floor(n / 100)] + (n % 100 !== 0 ? ' ' + toWords(n % 100) : '');
        }
    }

    return toWords(number);
}
