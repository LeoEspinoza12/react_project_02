import React from 'react'
import './Contact.css'
const Contact = (props) => {
  console.log('service page')
  return (

    <div 
      className='Contact'
      // onClick={()=>props.click(null)}
      >
      <h4>Contact Us</h4>
      <input type="text" placeholder='Fullname' required/>
      <input type="email" placeholder='Email Address' required/>
      <textarea name="" id="" cols="30" rows="10" placeholder='Enter your message'></textarea>
     
   


    </div>
  )
}

export default Contact