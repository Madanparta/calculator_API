const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser());

function checkValue(num1,num2){
    if(num1 === "" || num2 === ""){
        return false
    }
    return true
}
function checkValidation(num1,num2){
    if(isNaN(num1)|| isNaN(num2)){
        return false
    }
    return true
}

app.get('/',(req,res)=>{
    res.send("hello")
})

app.post('/add',(req,res)=>{
    //additions
    let num1 = req.body.num1
    let num2 = req.body.num2
    // console.log(sum)

    if(!checkValue(num1,num2)){
        res.status(400).json({
            status:"failure",
            message: 'value not availble', 
        })
    }
    if(!checkValidation(num1,num2)){
        res.status(400).json({
            status:"error",
            message: 'Please enter valid number', 
        })
    }
    let result = Number(num1)+Number(num2)
    if(Number(num1)< -1000000||Number(num2)< -1000000 || result< -1000000){
        res.status(400).json({
            status:"error",
            message: 'Underflow', 
        })
    }
    if(Number(num1)> 1000000||Number(num2)> 1000000 || result>1000000){
        res.status(400).json({
            status:"error",
            message: 'Overflow', 
        })
    }

    res.status(200).json({
        status:"success",
        message: 'the sum of given two numbers', 
        sum: result

    })

})
app.post('/sub',(req,res)=>{
    //subtractions.
    let num1 = req.body.num1
    let num2 = req.body.num2

    let result = Number(num1)-Number(num2)
    // console.log(sum)

    if(!checkValue(num1,num2)){
        res.status(400).json({
            status:"failure",
            message: 'value not availble', 
        })
    }
    if(!checkValidation(num1,num2)){
        res.status(400).json({
            status:"error",
            message: 'Please enter valid number', 
        })
    }

    if(Number(num1)< -1000000||Number(num2)< -1000000 || result< -1000000){
        res.status(400).json({
            status:"error",
            message: 'Underflow', 
        })
    }
    if(Number(num1)> 1000000||Number(num2)> 1000000 || result>1000000){
        res.status(400).json({
            status:"error",
            message: 'Overflow', 
        })
    }

    res.status(200).json({
        status:"success",
        message: 'the difference of given two numbers”', 
        difference: result

    })

})
app.post('/multiply',(req,res)=>{
    //multiplications..
    let num1 = req.body.num1
    let num2 = req.body.num2
    // console.log(sum)

    if(!checkValue(num1,num2)){
        res.status(400).json({
            status:"failure",
            message: 'value not availble', 
        })
    }
    if(!checkValidation(num1,num2)){
        res.status(400).json({
            status:"error",
            message: 'Please enter valid number', 
        })
    }
    let result = Number(num1)*Number(num2)
    if(Number(num1)< -1000000||Number(num2)< -1000000 || result< -1000000){
        res.status(400).json({
            status:"error",
            message: 'Underflow', 
        })
    }
    if(Number(num1)> 1000000||Number(num2)> 1000000 || result>1000000){
        res.status(400).json({
            status:"error",
            message: 'Overflow', 
        })
    }

    res.status(200).json({
        status:"success",
        message: 'The product of given numbers', 
        result: result

    })
})

app.post('/divide',(req,res)=>{
    //divided..
    let num1 = req.body.num1
    let num2 = req.body.num2
    // console.log(sum)

    if(Number(num2)<1){
        res.status(400).json({
            status:"error",
            message: 'Cannot divide by zero', 
        })
    }

    if(!checkValue(num1,num2)){
        res.status(400).json({
            status:"failure",
            message: 'value not availble', 
        })
    }
    if(!checkValidation(num1,num2)){
        res.status(400).json({
            status:"error",
            message: 'Please enter valid number', 
        })
    }
    let result = Number(num1)/Number(num2)
    
    if(Number(num1)< -1000000||Number(num2)< -1000000 || result< -1000000){
        res.status(400).json({
            status:"error",
            message: 'Underflow', 
        })
    }
    if(Number(num1)> 1000000||Number(num2)> 1000000 || result>1000000){
        res.status(400).json({
            status:"error",
            message: 'Overflow', 
        })
    }

    res.status(200).json({
        status:"success",
        message: 'The division of given numbers', 
        result: result

    })
})

app.get('*',(req,res)=>{
    res.status(404).json({
        status:"failer",
        message:"please enter valid path"
    })
})


app.listen(9000,()=>{
    console.log("express server runned on 9000.")
})