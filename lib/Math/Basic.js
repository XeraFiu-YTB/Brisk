exports.isPrimeNumber = function(number) {
    for(var i=2; i<number; i++) {
        if(number%i === 0) return false
    }
    return number > 1
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


