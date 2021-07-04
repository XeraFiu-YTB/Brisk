exports.average = function(array) {
    return array.reduce((first, second) => first + second, 0) / array.length 
}

exports.sum = function(array) {
    return array.reduce((first, second) => first + second , 0)
}