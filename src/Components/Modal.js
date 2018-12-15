import React, { Component } from 'react';
import '../Css/modal.css';
import Portal from './Portal';

export default class Modal extends Component {
  render() {
      const {children, toogle, on} = this.props;
    return (
        <Portal>
            {on &&
                 <div class="modal-wrapper" onClick={toogle}>
                    <div className='modal'>
                        <button className='close' onClick={toogle}>X</button>
                        {this.props.children}
                    </div>
                 </div>
                
            }
        </Portal>
    )
  }
}
