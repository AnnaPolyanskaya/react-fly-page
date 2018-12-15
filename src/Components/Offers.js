import React, { Component } from 'react';
import offers from '../Json/special_offers.json';
import Toogle from './Toogle';
import Portal from './Portal';
import Modal from './Modal';

export default class Offers extends Component {
  render() {
    return (
        <React.Fragment>
        {
            offers.map( it => (
                <div className="offer" key={it.id}>
                    <div className="offer__img">
                        <img src="http://localhost:3000/img/img.png" alt=""/>
                    </div>
                    <div className="offer__content">
                        <h3>{it.count_trips} {it.name}</h3>
                        <p>But i must explain to you how all this mistaken idea of denouncing pleasure</p>

                    </div>
                    <div className="offer__foot">
                        <div className="price">{it.price} $</div>
                        
                        <Toogle>
                            {({ on, toogle }) => (
                                <React.Fragment>
                                    <button className="gold-btn" onClick={toogle}>Read more</button>
                                    <Modal on={on} toogle={toogle}>
                                       <div className='title'>
                                           Full information 
                                       </div>
                                       <div className='name'>{it.name}</div>
                                       <div className='content'>
                                            <div className='img'><img src="http://localhost:3000/img/img.png" alt=""/></div>
                                            <div className='text'> {it.comment}</div>
                                       </div>
                                       <div className='price'>Price: {it.price} $</div>
                                    </Modal>
                                </React.Fragment>
                            )}
                        </Toogle>
                        
                    </div>
                </div>
            ))
        }
        </React.Fragment>
    )
  }
}
