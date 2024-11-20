const mysql= require ('mysql2');
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'drogas',
    password:''
})
conexion.connect((err)=>{
    if(err) throw err;
    console.log('conectado');
})
module.exports=conexion; 