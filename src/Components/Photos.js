import React, { Component } from 'react'

export default class Photos extends Component {
    state = {
        imgs: []
    }

  createImgList = () => {
        let imgs =[];
        for( var i = 1; i <= 20; i++){
            imgs.push(<div className='photo-item' key={i}> <img src={`http://localhost:3000/imgs/${i}.jpg` } /> </div>) ;     
        } 
        return imgs;

  }  
  render() {
   return(
       <React.Fragment>
            {this.createImgList()}
       </React.Fragment>
   )
    
    
  }
}
