const express= require('express')
const app=express()
const port=5000
const path=require('path')

app.use(express.static('./'))

app.get('/',(req,res)=>{

    try{
	res.sendFile(path.join(__dirname,'index.html'))
       }catch(error){
	   console.log(error)
       }
})

app.listen(port,()=>{
    console.log("listening at port ",port)
})
