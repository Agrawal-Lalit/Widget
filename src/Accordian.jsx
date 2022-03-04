import React,{useState ,useEffect} from "react";
import axios from 'axios';

const Accordian=()=>{
  const baseURL="https://en.wikipedia.org/w/api.php";
  const [data,setData]=useState([]);
  const [search,setSearch]=useState('');

  useEffect(()=>{
    
    const helper = async()=>{
      const response=await axios.get(baseURL,{
        params:{
          action:'query',
          list:'search',
          origin:'*',
          format:'json',
          srsearch: search
        }
      });
     setData(response.data.query.search);
    }
   helper();},[search]);

  return (
      <div>
        <h2 className="ui header">Search Wiki</h2>
        <div className="ui input">
          <input type="text" placeholder="Search..." onChange={e=>setSearch(e.target.value)} value={search}/>
        </div>
        <td  />
        <div className="ui list">
          {data.map(item => <li key={item.pageid} 
                                dangerouslySetInnerHTML={{__html: item.snippet}}
                                style={{margin:'2px',border:'2px solid grey',padding:'4px'}}
                            ></li>)}
        </div>
      </div>
  );
} 
export default Accordian;