let http = require("http")

exports.get = function(url) {
    http.get(url, (res) => {
        let data;
        res.on("data", (chunk) => {
            data += chunk
        })
        res.on("end", () => {
            return data
        })
    })
}