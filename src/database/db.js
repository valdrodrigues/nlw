//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto de operacoes no bd
const db = new sqlite3.Database("./src/database/database.db")

//exportar o banco de dados
module.exports = db




//utilizar o bd
// db.serialize(() => {
    // //criar tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // //inserir
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items) 
    //     VALUES (
    //         ?, ?, ?, ?, ?, ?, ?);
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do sul",
    //     "Resíduos eletrônicos e lâmpadas"
    // ]

    // function afterInsertData(err){
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastro realizado com sucesso")
    //     console.log(this)
    // }

    // //roda o insert
    // db.run(query, values, afterInsertData)
    
    // consultar
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Registros:")
    //     console.log(rows)
    // })

//     db.run(`DELETE FROM places WHERE id = ?`, [3], function (err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Registro deletado com sucesso")
//     })
// })

