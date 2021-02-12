import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import './media/css/kontak.css';
import logo1 from './media/images/logo-wa.png';
import logo2 from './media/images/logo-ig.png';
import logo3 from './media/images/logo-tele.png';

class Kontak extends React.Component {
    render() {
        return(
          <div className="kontak-container">
            <Card.Group className="grup-kartu" align="center">
                <Card className="card">
                  <Card.Content>
                    <Image
                      floated='right'
                      size='mini'
                      src={logo1}
                    />
                    <Card.Header>WhatsApp</Card.Header>
                    <Card.Meta>083652891769</Card.Meta>
                    <Card.Description>
                      Pertanyaan bisa diajukan di nomer tersebut
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button color='green'>
                        Hubungi
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image
                      floated='right'
                      size='mini'
                      src={logo2}
                    />
                    <Card.Header>Instagram</Card.Header>
                    <Card.Meta>@tereliye</Card.Meta>
                    <Card.Description>
                      Informasi dan Giveaway akan diupload di Instagram
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button color='red'>
                        Kunjungi
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image
                      floated='right'
                      size='mini'
                      src={logo3}
                    />
                    <Card.Header>Telegram</Card.Header>
                    <Card.Meta>https:tele/123/tereliye-forum</Card.Meta>
                    <Card.Description>
                      Gabung pada grup tele untuk berdiskusi
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button color='blue'>
                        Gabung Grup
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
            </Card.Group>
          </div>   
        )
    }
}

export default Kontak;