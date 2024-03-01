import React, { useState } from 'react'

function FormInput(props) {
let {errorMessage,handleChange,...others} = props
  return (
    <>
    <div className='form__input '>
  
      <input 
      
      onChange={handleChange} 
      {...others} 
      onBlur={()=>console.log("blur work")}
      
      
      />
         <span className='form__error'>
        {errorMessage}
      </span>
    </div>
   
      </>
  )
}

export default FormInput