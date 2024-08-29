import { useNavigate, useParams } from "react-router-dom";
import { checkVerify } from "../api";
import '../App.css'
const Verify = () =>{
    const params = useParams()
    const navigate = useNavigate()
    console.log(params)
const CheckUser = async()=>{
  const data =  await checkVerify(params.email)
  if(data.code === 1){
    navigate('/login')
  }
  else{
    alert('Please Verify your account')
  }
}
    return(
    <div className="verify-container" style={{width:'100%',
                     display:'flex',
                     justifyContent:'center',
                     height:'100vh'}}>
        <div className="verify-div">
                   <p style={{fontWeight:'bold',color:'white'}}>Please Check your Gmail to verify your Account,Click here after verification..!</p> 
                   <button className="verify-btn" onClick={CheckUser}>Click Here</button>
        </div>
    </div>
    )
}
export default Verify;