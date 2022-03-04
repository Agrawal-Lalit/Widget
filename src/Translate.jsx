import axios from "axios";
import React,{useState,useEffect} from "react";
import Dropdown from "./Dropdown";

const Translate =()=>{

  const styling={textAlign:'center',
                  background:'#1b2b3b',
                  color:'#fff',
                  padding:'10px',
                  margin:'0px',
                  fontSize:'1.5em'
                }
  const apiKey='AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';
    const [input,setInput]=useState('');
    const [lang,setLang]=useState('hi');
    const [resp,setResponse]=useState(null);

  useEffect(()=>{      
    let timerId = setTimeout(() => {
       axios.post("https://translation.googleapis.com/language/translate/v2",{},{
        params: {
          q :input,
          target: lang,
          format: "text",
          key:apiKey
        }
      }
     )
    .then(response =>setResponse(response.data.data.translations[0].translatedText))
    .catch(err => console.log(err));
    
    },1000);
    return ()=>clearTimeout(timerId);
    },[input,lang]);

    

  return (
    <div style={styling}>
      <span style={{marginRight:'10px'}}>Select language : </span> 
      <Dropdown onLanguageSelected={setLang}/>
      <hr/>
      <span style={{marginRight:'10px'}}>Enter your text to convert: </span>
      
      <textArea
          placeholder="type here" 
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          rows="4" cols="50">
       </textArea>
        <button className="ui button" style={{marginLeft:'10px',height:'30px'}}
          onClick={()=>document.location.reload()}
          >Reset</button>
        <hr/>
       <span>{resp}</span>
    </div>
  );
}
export default Translate;






