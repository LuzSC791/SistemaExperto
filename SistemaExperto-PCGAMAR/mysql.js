// Obtenga el servicio mysql
var mysql = require('mysql');

// Agregue las credenciales para acceder a su base de datos
var connection = mysql.createConnection({
    host: 'localhost', 
    port: '3307',
    user: 'root',
    password: 'phpMyadmin791',
    database:'pcgamer'
});

// conectarse a mysql 
connection.connect( (err) =>{
    if(err) throw err
    console.log('La conexión funciona');
});

//Insertar valores
// const insertar = "INSERT INTO pc VALUES (2,16,'SSD',4500, 4)"
// connection.query(insertar , (err, rows) => {
//     if(err) throw err
    
// });

// Realizar una consulta
connection.query('SELECT * from pc', (err, rows) => {
    if(err) throw err
    console.log('Datos de la tabla');
    console.log(rows);
});

connection.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
      connection.query('INSERT INTO pc set ?', data, (err, pc) => {
        console.log(pc)
        res.redirect('/');
      })
    })
  };



// Cerrar la conexión
connection.end()
    // La conexión se ha cerrado

