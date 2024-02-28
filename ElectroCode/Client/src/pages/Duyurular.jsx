import React, { useState } from 'react'
import Title from '../Components/Title'
import DuyuruCart from "../Components/DuyuruCart"
import data from "../../data.js"
function duyurular() {

  

 let [numberOfCards,setNumberOfCards]=useState(6)
 

console.log( numberOfCards , typeof(numberOfCards))


function showMore(){
  // TODO DISABLE IT WHEN THERE IS NO MORE CONTENT 
  setNumberOfCards(prev => prev+2 )

}




  return (

   <section className='blogPage'>
    <Title title="Blog"/>
    <div className="grid--elements">
     {data.map((item,index) =>{
     return index<numberOfCards&& <DuyuruCart {...item} key={index}/>
  })}
    </div>

    <button className=' readMore showMore' onClick={showMore}> Show more</button>
   </section>
  )
}

export default duyurular