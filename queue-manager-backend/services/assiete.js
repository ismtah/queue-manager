
module.exports = {

    getDataFromFile: (fileData) => {
        return fileData.split('\n').map(elm => elm.trim()).filter(elm => {
            return (!elm.includes('*') && !(elm == '') && !(elm == 'name'))
        }).map(elm => {
            return { name: elm }
        })

    }
}


