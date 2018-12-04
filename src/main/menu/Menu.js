import React, { Component } from 'react'
import Intro from './intro/Intro'
import Services from './services/Services'
import Contact from './contact/Contact'
import './Menu.css'


class Menu extends Component {


  render() {

    let myMenu = null

    // console.log('switch', this.props.switch)
    // console.log('menu', this.props.selectedMenu)


    if(!this.props.switch){
      // console.log('menu page')
      myMenu = <button className={this.props.option} onClick={()=> this.props.click(this.props.option)}>{this.props.option.toUpperCase()}</button>
    } 
    
    
    if(this.props.switch ===true){
      
      if(this.props.menu === 'restaurant'){
        myMenu = <Intro 
                click={this.props.click}
                menu={this.props.menu}/>
      }
      if(this.props.menu === 'services'){
        myMenu = <Services 
                click={this.props.click}
                menu={this.props.menu}/>
      }
      if(this.props.menu === 'contact'){
        myMenu = <Contact 
                click={this.props.click}
                menu={this.props.menu}/>
      }

    }

    return (
      <div className='Menu'>
        {myMenu}
      </div>
    )
  }
}

export default Menu