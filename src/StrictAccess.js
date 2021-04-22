import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const { username, password } = this.props;
    const welcome = <div>Welcome joao!</div>;
    return (
      username === 'joao' && password === '123s4' ? welcome : <Redirect to="/">{alert('Acess Danied')}</Redirect>
      
    );
  }
}

export default StrictAccess;
