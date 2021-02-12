import React from 'react';
import img from './media/images/Tere.jpeg';
import './media/css/tentangsaya.css';
import { Card, Icon } from 'semantic-ui-react'

const extra = (
    <a>
      <Icon name='user' />
      2503 Berlangganan
    </a>
  )

class TentangSaya extends React.Component {
    render() {
        return (
            <div className="App-beranda" align="center">
                <h2>Tentang Penulis</h2>
                <Card align="center"
                    image={img}
                    header='Tere Liye'
                    meta='memulai karir sejak 2005'
                    description='Penulis lahir di Lahat pada tanggal 21 Mei 1979. Penulis merupakan sosok yang aktif dalam menulis novel.'
                    extra={extra}
                />
            </div>
                
        );
    }
}

export default TentangSaya;