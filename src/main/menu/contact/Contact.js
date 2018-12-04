import React from 'react'
import './Contact.css'
const Contact = (props) => {
  console.log('service page')
  return (

    <div 
      className='Contact'
      onClick={()=>props.click(null)}>
      <div></div>
      <h4>Services</h4>
      <p>Praesentium autem aliquid error earum deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nostrum qui quos dolores fugit tenetur sint ut a ipsa fugiat totam laudantium incidunt. Quo cupiditate quae accusantium? Minima vitae magni quam amet temporibus excepturi sapiente totam illum explicabo et tenetur autem suscipit dolores sed ex quaerat aperiam, repellendus reiciendis atque!</p>
      {/* <p>Quos alias adipisci nostrum necessitatibus, quis debitis explicabo, praesentium neque itaque perferendis quisquam impedit consequuntur reprehenderit eos illum delectus assumenda sint voluptatum nisi. Doloribus at unde libero, iure eum vel corporis recusandae molestiae, totam eligendi, ratione placeat voluptatum. Atque enim molestiae molestias corrupti consequuntur aperiam error. Sint tempore, minus minima illo sit eius veritatis explicabo vel dolore rerum assumenda quos at eaque fugiat nisi sed pariatur quae rem temporibus libero. Explicabo veniam aperiam dolor sunt delectus aliquid eius.</p> */}


    </div>
  )
}

export default Contact