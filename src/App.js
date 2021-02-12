// import React from 'react';
import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  
  state = { activeItem: 'beranda' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return(  
      <div>
        <Segment inverted>
          <Menu inverted secondary>
            <Link to="/">
            <Menu.Item
              name='beranda'
              active={activeItem === 'beranda'}
              onClick={this.handleItemClick}
            />
            </Link>

            <Link to="/tentangsaya">
            <Menu.Item
              name='tentangSaya'
              active={activeItem === 'tentangSaya'}
              onClick={this.handleItemClick}
            />
            </Link>

            <Link to="/karya">
            <Menu.Item
              name='karya'
              active={activeItem === 'karya'}
              onClick={this.handleItemClick}
            />
            </Link>

            <Link to="/kontak">
            <Menu.Item
              name='kontak'
              active={activeItem === 'kontak'}
              onClick={this.handleItemClick}
            />
            </Link>
          </Menu>
        </Segment>

      <p><Utama /></p>
    </div>
    )
  }
}

export default App;
