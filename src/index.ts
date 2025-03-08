import express from "express"
import prisma from "./db"

export const app = express()


app.use(express.json())

app.post("/sum",async(req,res)=>{
    const a = req.body.a;
    const b = req.body.b;
    try {      
      const result = a+b;
      const dt = await prisma.sum.create({
        data:{
            a:a,
            b:b,
            answer:result
        }
      }) 
      res.json({
        answer:result,
        id:dt.id
      })
    } catch (error) {
        console.log("Getting Error In the /sum end Point Done");
        throw new Error("/sum Endpoint Error")
    }
})