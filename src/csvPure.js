const fs = require('fs')
const Database = require('../db/db')
const createElement = require('../db/createElement')

readFile = (file) => {
    fs.readFile('./csvFiles/' + file, 'utf-8', (err, data) => {
        if (err) throw err;

        var dado = data.split('\n').map((x) => {
            return x.split(';')
        })

        Database.then(async (db) => {

            dado.map(async (y, index) => {
                let register
                try {
                    if (index === 0) return false
                    if (y[2] === undefined) y[2] = ""
                    
                    register = {
                        name: y[0].toUpperCase(),
                        zip: y[1].substring(0, 5),
                        website: y[2].toLowerCase()
                    }
                    
                    await createElement(db, register)
                    
                } catch (error) {
                    console.error(error, index, register)
                }
            })
            console.log('\n\n')
        })

    });
}

module.exports = readFile