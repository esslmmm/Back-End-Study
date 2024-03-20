document.querySelector('#btnLogin').onclick = async function(){
    // 1.get username and password
    const user = document.querySelector('#username').value
    const pass = document.querySelector('#password').value
    console.log(user,pass)

    // 2. send data to server and show the response
    try{
        const response = await fetch(`/signin2/${user}/${pass}`)
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

