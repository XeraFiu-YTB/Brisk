exports.isPrimeNumber = function(number) {
    // primes number are positive interger
    if(number < 0 || !Number.isInteger(number)) return false;
    // 1 and 2 need to be excluded as 1 divided every number and 2 divide half of them
    if(number === 1 || number === 2) return true
    // if number is a multiple of 2, not a prime
    if(number % 2 === 0) return false
    // the maximum number that can divide n is sqrt(n)
    // iterate across all odd numbers <= sqrt(n)
    // if one divide n, n is not prime
    for(let i = 3; i <= Math.sqrt(number); i += 2) {
        if(number % i === 0) return false;
    }
    return true;
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


