const express = require("express");
const app = express();
const port = 5000


const User = {

    list:(req,res)=>{
        res.status(200).send("Tome sus usuarios")
    },

    get: (req,res)=>{
        res.status(200).send("usuario id")
    },

    create: (req,res)=>{
        res.status(201).send("usuario creado");
    },

    update: (req,res)=>{
        res.sendStatus(204);
    },

    destroy:(req,res)=>{
        res.sendStatus(204);
    }


}




app.get("/users",User.list)

app.get("/users/:id",User.get)

app.post("/users",User.create)

app.put("/users/:id",User.update)

app.patch("/users/:id",User.update)

app.delete("/users/:id",User.destroy)

app.get("*",(req,res)=>{
    res.status(404).send("page not found")
})


app.listen(port, ()=>{
    console.log("Api usuarios iniciada");
})    



