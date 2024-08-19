import { useNavigate, useParams } from "react-router-dom";
import { checkVerify } from "../api";

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
    <div style={{width:'100%',
                     display:'flex',
                     justifyContent:'center'}}>
        <div 
        style={{border:'1px solid orange',
                borderRadius:'10px',
                padding:'10px',
                width:'95%',
                maxWidth:'450px',
                marginTop:'5rem',
                backgroundColor:'#FFD49B'}}>
                   <p style={{fontWeight:'bold',color:'orange'}}>Please Check your Gmail to verify your Account,Click here after verification..!</p> 
                   <button className="btn" style={{backgroundColor:'orange',color:'white',fontWeight:'bold'}} onClick={CheckUser}>Click Here</button>
        </div>
    </div>
    )
}
export default Verify;