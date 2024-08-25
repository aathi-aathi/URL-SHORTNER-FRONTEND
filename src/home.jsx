import React, { useState ,useEffect} from 'react';
import {getShortUrl ,getAllUrls} from './api';
import { useNavigate, useParams } from 'react-router-dom';
import './App.css'
const UrlShortener = ({count,setCount}) => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [longUrls,setLongUrls]=useState([])
  const [shortUrls,setShortUrls]=useState([])
  const pathParams = useParams()
  const navigate = useNavigate()
 const email = pathParams.email
 const handleSubmit = async(e) => {
    e.preventDefault();
    const data = await getShortUrl({longUrl,email})
       setShortUrl(data.shortUrl);
       setCount(count+1)
    
  };
  const getUrls = async()=>{
    const  data = await getAllUrls(email)
    setLongUrls(data.longUrl)
    setShortUrls(data.shortUrl)
   }
   useEffect(()=>{
      getUrls()
   },[count])
return (
    <div className="container">
      <h2 className="text-center mb-4 ">URL Shortener</h2>
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="longUrl" className='mb-2 ms-3' style={{color:'white',fontWeight:'bold'}}>Enter or Paste Your Long URL:</label>
          <input
            type="text"
            className="form-control"
            id="longUrl"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter your long URL here"
            required
            style={{borderRadius:'30px',boxShadow:'0 0 5px rgba(0,0,0,0.2)',fontWeight:'bold'}}
          />
        </div>
        <button type="submit" className="btn ms-2" 
        style={{boxShadow:'0 0 5px rgba(0,0,0,0.2)',backgroundColor:'whitesmoke',color:'rgb(89, 89, 226)',fontWeight:'bold'}}>
         
          Shorten
        </button>
        
      </form>
      
      {shortUrl && (
        <p style={{color:'black'}}>
          Short URL: <a href={longUrl} onClick={getShortUrl} style={{color:'white'}} rel="noopener noreferrer">https://{shortUrl}</a>
        </p>
      )}
        
        <table className="table">
          <thead>
            <tr>
            <th>Short URL</th>
              <th>Long URL</th>
              
            </tr>
          </thead>
          <tbody>
            
       {shortUrls.map((url,index)=>(
          <tr key={index}>
            <td ><a href={longUrls[index]}>{url}</a></td>
            <td><a href={longUrls[index]}  style={{wordBreak:'break-all'}}>{longUrls[index]}</a></td>
          </tr>
        ))} 
            </tbody>
        </table>
        
    </div>
  );
};

export default UrlShortener;
