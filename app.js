const express = require('express')
const path = require('path')
const app = express()

const PORT = 3000;
app.listen(PORT,function(){
    console.log('Server is running at port' + PORT)
})


//sigin GET (wrong)
// localhost:3000/signin2/admin/1234
app.get('/signin2/:username/:password',(req,res)=>{
    const user = req.params.username;
    const pass = req.params.password;
    console.log(user,pass)
    if(user == 'admin' && pass == '1234'){
        res.send('Login ok')
    }else{
        res.status(401).send('Login fail')
    }
})

//---------------------------------------------
//login page
//localhost:3000/login
app.get('/login',function(_req,res){ 

    res.sendFile(path.join(__dirname,'/view/login.html'))
})


//root service
//get web page to server
app.get('/',function(_req,res){ // " _ " means not use the parameter
    // res.status(200).send('Hello')

    // res.sendFile('/view/index.html')

    res.sendFile(path.join(__dirname,'/view/index.html')) //help to find the file (when we put the web file to the real server, the web file will loacte some place in server that we don't know)
})

//config
//set "public" folder to static folder
app.use('/public',express.static(path.join(__dirname, 'public')))

//services
//localhost:3000/now
app.get('/now', (_req,res)=>{
    const now = new Date().toLocaleString()
    res.send(now)
})