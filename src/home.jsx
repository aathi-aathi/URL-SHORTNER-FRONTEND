import React, { useEffect, useState } from 'react';
import { getAllUrls, getShortUrl } from './api';
import { useParams } from 'react-router-dom';

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [longUrls,setLongUrls]=useState([])
  const [shortUrls,setShortUrls]=useState([])
  const [count,setCount]=useState(0)
 const pathParams = useParams()
 const email = pathParams.email
 console.log(pathParams)
//   const generateShortUrl = (longUrl) => {
//     // Mock short URL generation logic
//     return `https://short.ly/${btoa(longUrl).slice(0, 6)}`;
//   };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = await getShortUrl({longUrl,email})
       setShortUrl(data.shortUrl);
       setCount(count+1)
      // setUrlList([...urlList, { longUrl, shortUrl }]);
    
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
    <div className="container mt-4">
      <h2 className="text-center mb-4">URL Shortener</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group mb-2">
          <label htmlFor="longUrl">Enter Long URL:</label>
          <input
            type="text"
            className="form-control"
            id="longUrl"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter your long URL here"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Generate Short URL
        </button>
      </form>

      {shortUrl && (
        <div className="alert alert-success">
          Short URL: <a href={longUrl} onClick={getShortUrl}  rel="noopener noreferrer">https://{shortUrl}</a>
        </div>
      )}

      
        <table className="table table-striped mt-4">
          <thead>
            <tr>
            <th>Short URL</th>
              <th>Long URL</th>
              
            </tr>
          </thead>
          <tbody>
            
       {shortUrls.map((url,index)=>(
          <tr key={index}>
            <td><a href={longUrls[index]}>{url}</a></td>
            <td><a href={longUrls[index]}>{longUrls[index]}</a></td>
          </tr>
        ))} 
            </tbody>
        </table>
      
    </div>
  );
};

export default UrlShortener;
