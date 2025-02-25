const express = require('express')
const path = require('path')
const app = express()
//config
//set "public" folder to static folder
app.use('/public',express.static(path.join(__dirname, 'public')))

//allow json exchange
app.use(express.json());

//allow urlencoded 
app.use(express.urlencoded({extended:true}))

const PORT = 3000;
app.listen(PORT,function(){
    console.log('Server is running at port' + PORT)
})

//---------------------------------------------

//sigin GET (wrong)
// localhost:3000/signin2/admin/1234
// app.get('/signin2/:username/:password',(req,res)=>{
//     const user = req.params.username;
//     const pass = req.params.password;
//     console.log(user,pass)
//     if(user == 'admin' && pass == '1234'){
//         res.send('Login ok')
//     }else{
//         res.status(401).send('Login fail')
//     }
// })


//sign Post (Correct)
app.post('/login',(req,res)=>{
    //get username and password
    const username = req.body.username;
    const password = req.body.password;
    // console.log(username, password)
    // res.send();
    if(username == "admin" && password == "1234"){
        res.status(200).send('login Ok')
    }else{
        res.status(404).send('fail!!')
    }
})

//---------------------------------------------
//login page
//localhost:3000/login
app.get('/login',function(_req,res){ 

    res.sendFile(path.join(__dirname,'/view/login.html'))
})


//---------------------------------------------
//root service
//get web page to server
app.get('/',function(_req,res){ // " _ " means not use the parameter
    // res.status(200).send('Hello')

    // res.sendFile('/view/index.html')

    res.sendFile(path.join(__dirname,'/view/index.html')) //help to find the file (when we put the web file to the real server, the web file will loacte some place in server that we don't know)
})

//services
//localhost:3000/now
app.get('/now', (_req,res)=>{
    const now = new Date().toLocaleString()
    res.send(now)
})