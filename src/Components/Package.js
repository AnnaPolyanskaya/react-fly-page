import React, { Component } from 'react'
import packages from'../Json/packages.json';

export default class Package extends Component {
  
  render() {
        return(
            <React.Fragment>
                {
                    packages.map(it => {
                    return <option key={it.id}>{it.name}</option>;
                    })
                }
            </React.Fragment>
        )
    }
}
