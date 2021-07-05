exports.isPrimeNumber = function(number) {
    // primes number are positive interger
    if(number < 0 || !Number.isInteger(number)) return false;
    // 1 and 2 need to be excluded as 1 divided every number and 2 divide half of them
    if(number === 1 || number === 2) return true
    // if number is a multiple of 2, not a prime
    if(number % 2 === 0) return false
    // the maximum number that can divide n is sqrt(n)
    // divide that by two and map it to n*2+1 to remove even numbers
    // if one of these number divide n, not a prime.
    return !Array(Math.sqrt(number) / 2).fill(0)
        .some((_, i) => number % (i * 2 + 3) === 0)
}

exports.isNumber = function(number) {
    if(typeof number === "number") {
        return number-number === 0
    } else if(typeof number === "string" && number.trim() !== "") {
        if(Number.isFinite) {
            return Number.isFinite(+number)
        } else {
            return isFinite(+number)
        }
    }
    return false
}


