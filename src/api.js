const backendURL = 'https://url-shortner-backend-xdkh.onrender.com'
const postData =async(userData)=>{
    const response = await fetch(`${backendURL}/user`,{
        method:"POST",
        body:JSON.stringify(userData),
        headers:{
        "Content-Type":"application/json; charset=utf-8"
    }
}) 
    return await response.json()
}
const verifyUserData =async(userData)=>{
    console.log(userData)
    const response = await fetch(`${backendURL}/verify-account`,{
        method:"POST",
        body:JSON.stringify({userData}),
        headers:{
        "Content-Type":"application/json; charset=utf-8"
    }
}) 
    return await response.json()
}
const loginData =async(userData)=>{
    const response = await fetch(`${backendURL}/login`,{
        method:"POST",
        body:JSON.stringify(userData),
        headers:{
        "Content-Type":"application/json; charset=utf-8"
    }
}) 
    return await response.json()
}
const forgotPassword = async(userData)=>{
    const response = await fetch(`${backendURL}/forgot-password`,{
        method:"POST",
        body:JSON.stringify(userData),
        headers:{
        "Content-Type":"application/json; charset=utf-8"
    }
    })
    return await response.json()
}
const resetpassword = async(token,password)=>{
    const response = await fetch(`${backendURL}/reset-password`,{
     method:"POST",
     body:JSON.stringify({
         token,
         password
     }),
     headers:{
          "Content-Type":"application/json; charset=utf-8"
     }
    })
    return await response.json()
 }
 const getShortUrl = async(userData)=>{
    const response = await fetch(`${backendURL}/short-url`,{
     method:"POST",
     body:JSON.stringify(userData),
     headers:{
          "Content-Type":"application/json; charset=utf-8"
     }
    })
    return await response.json()
 }
 const getAllUrls = async(email)=>{
    const response = await fetch(`${backendURL}/short-url/${email}`)
    return await response.json()
 }
 const checkVerify =async(email)=>{
    console.log(email)
    const response = await fetch(`${backendURL}/verify/${email}`,{
        method:"POST",
        headers:{
        "Content-Type":"application/json; charset=utf-8"
    }
}) 
    return await response.json()
}
export {postData,verifyUserData,loginData,forgotPassword,resetpassword,getShortUrl,getAllUrls,checkVerify}