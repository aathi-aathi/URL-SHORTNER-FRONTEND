import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { verifyUserData } from "../api"

const VerifyAccount = () => {
    const [message,setMessage]=useState('')
    const pathParams= useParams()
    const token = pathParams.token
    const decoded = jwtDecode(token)
    const email = decoded.email

    const verifyUser =async () =>{
        if(!token){
    setMessage('Something went wrong')
   }
   else{
    const data = await verifyUserData(token)
    if(data.code == 1){
        setMessage('Verified successfully')
    }else{
     setMessage('Link Expired')   
    }
}
    }
   useEffect(()=>{
verifyUser()
   },[])

    return(
        <>
        <h1>{message}</h1>
        </>
    )
}
export default VerifyAccount;