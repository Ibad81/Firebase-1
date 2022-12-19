async function signup(e){
    e.preventDefault()
    const email=document.querySelector('#signupemail')
    const password=document.querySelector('#Signuppassword')

    // try{
    //     const result=firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    //     M.toast({html: `welcome ${result.user.email}`,classes:"red"})
    // console.log(result)
    
    // }catch(err){
    //     console.log(err)
    //     M.toast({html: err.message})
    // }

    try{
        const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        
        M.toast({html:`welcome ${result.user.email}`,classes:"green"})
       console.log(result)  
      }catch(err){
          console.log(err)
          M.toast({html: err.message,classes:"red"})
      }

}
