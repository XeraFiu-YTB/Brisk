let fs = require("fs")
let brisk = {}

function loadLib(dir) {
    //All topfolder inside the lib
    let categories = fs.readdirSync(dir).filter(folder => !folder.includes("."))

    categories.forEach((category) => {
        brisk[category] = {}
        //All files in a subfolder
        let files = fs.readdirSync(`${dir}/${category}`).filter(files => files.endsWith(".js"))
        for(let file of files) {
            let fileName = file.split(".")[0]
            brisk[category][fileName] = require(`${dir}/${category}/${file}`)
        }
        //exports each categories with all inside
        module.exports[category] = brisk[category]
    })
}

loadLib("./lib/")
