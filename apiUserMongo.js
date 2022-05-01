const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const port = 3000;

/* MONGO */

const mongoConn  ="mongodb+srv://jhon:jhon@cluster0.v5pb1.mongodb.net/miapp?retryWrites=true&w=majority"
mongoose.connect(mongoConn);

const Users = mongoose.model("User",{
    name:{type:String,required:true,minLength:3},
    lastName:{type:String,required:true,minLength:3}
})


/* Fin de mongo */

const User = {

    list:  async(req,res)=>{
        const users = await Users.find();
        res.status(200).send(users);
    },

    get: async(req,res)=>{
        const {id} = req.params;
        const user = await Users.findOne({_id:id})
        res.status(200).send(user);
    },

    create:async(req,res)=>{
        const user = new Users(req.body)
        const savedUser = await user.save();
        // console.log(req.body)
        res.status(201).send(savedUser._id)
    },

    update: async(req,res)=>{
        const {id} = req.params;
        const user = await Users.findOne({_id:id});
        //reemplazar los datos del usuario con lo que viene en el body
        Object.assign(user,req.body);
        await user.save();
        res.sendStatus(204);
    },

    destroy: async(req,res)=>{
        const {id} = req.params;
        const user = await Users.findOne({_id:id});
        if(user){
            user.remove();
        }
        res.sendStatus(204);
    }
}


app.get("/users",User.list);
app.get("/users/:id",User.get);
app.post("/users",User.create);
app.put("/users/:id",User.update);
app.patch("/users/:id",User.update);
app.delete("/users/:id",User.destroy);




app.get("*",(req,res)=>{
    console.log("Pagina no encontrada");
})




app.listen(port, ()=>{
    console.log("aplicación con mongo iniciada");
})