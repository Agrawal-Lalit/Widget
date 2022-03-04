import React from "react";


const Dropdown =({onLanguageSelected})=>{
//now here we know that onLanguageSelected is a function which takes item selected form langItem
const langItem=[
    {lang:'hi',name:'Hindi'},
    {lang:'ar',name:'Arabic'},
    {lang:'bn',name:'Bengali'},
    {lang:'kn',name:'Kannada'},
    {lang:'es',name:'Spanish'},
    {lang:'af',name:'Afrikaans'},
    {lang:'da',name:'Danish'},
    {lang:'fr',name:'French'},
    {lang:'de',name:'German'},
    {lang:'el',name:'Greek'},
    {lang:'gu',name:'Gujarati'},
    {lang:'it',name:'Italian'},
    {lang:'ml',name:'Malayalam'},
    {lang:'mr',name:'Marathi'},
    {lang:'pa',name:'Punjabi'},
    {lang:'ru',name:'Russian'},
    {lang:'te',name:'Telugu'},
];
  
   const apply =(e)=>{
    const obj= langItem.filter(item => item.name===e.target.value);
    onLanguageSelected(obj[0].lang);
   }
   
    return (<select onChange={apply}>
    {langItem.map(item => <option key={item.lang} > {item.name}</option>)}
         </select>
        
    );
}
export default Dropdown;