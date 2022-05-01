const express = require("express");

const app = express();
const port = 3000;



app.get("/",(req,res)=>{
    console.log("Esto es un get");
    //console.log(res);
    res.status(200).send("tome sus datos");
})

app.get("/:id",(req,res)=>{
    console.log(req.params);
    console.log(res.params);
    res.status(200).send("Tome su usuario")
})

app.post("/",(req,res)=>{
    res.status(201).send("usuario creado");
})

app.put("/:id",(req,res)=>{
    console.log(req.params);
    res.sendStatus(204);
})
app.patch("/:id",(req,res)=>{
    console.log(req.params);
    res.sendStatus(204);
})

app.delete("/:id",(req,res)=>{
    console.log(req.params);
    res.sendStatus(204);
})




app.listen(port,()=>{
    console.log("Aplicación iniciada");
})
