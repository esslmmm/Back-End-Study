const formLogin = document.querySelector('#formLogin')

formLogin.onsubmit = async function(e){
    //the form will be not refresh //prevent the default form refresh
    e.preventDefault();

    // 1.get username and password
    const user = formLogin['username'].value
    const pass = formLogin['password'].value

    // 2. send data to server and show the response
    try{
        const options = {
            method : 'POST',
            headers : {'Content-Type':'application/json'}, //'Content-Type use ''(comma) because it's look like ordinary data and it is a key also
            body : JSON.stringify({'username': user, 'password': pass}) //get username and password from the form above
        }

        const response = await fetch('/login', options) //this use by (post)
        // const response = await fetch(`/signin2/${user}/${pass}`) //this use by (get)

        if(response.ok){ 
            //civert response to text (it take time)
            const message = await response.text();
            alert(message)

        }else if(response.status == 401){
            const message = await response.text();
            throw Error(message)

        }
        
        else{

            //alert('connection error')
            throw Error('connection error')

        }
        }catch(error){

            alert(error.message)

        }
        
    }

