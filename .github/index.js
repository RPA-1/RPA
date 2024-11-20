const express =require ('express');
const bodyparser= require('body-parser');
const path = require('path');
const conexion = require('./config/conexion');
const app = express();

app.set ('views',path.join(__dirname,'./src/views'))
app.set('view engine','ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extends:false}))

app.get('/',(req,res)=>{
res.render('principal');
})
app.post('/guardar',(req,res)=>{
    const datos=req.body;
    conexion.query('insert into drogas set?' ,[datos],(err,result)=>{
        if(err) throw err;
        console.log('guardado con exito'+result);
    })
console.log(datos);
})

conexion;

app.listen(3000,()=>{
    console.log("servidor corriendo en http://localhost:3000");
});
