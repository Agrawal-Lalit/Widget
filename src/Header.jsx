import Links from './Links';
import React from 'react'

const Header= () =>{
  return (
    <>
    <Links href="/" item="Accordian"></Links>
    <Links href="/dropdown" item="DropDown"></Links>
    <Links href="/translate" item="Translate"></Links>
    </>
  )
}

export default Header;