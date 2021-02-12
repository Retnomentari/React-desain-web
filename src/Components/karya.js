import React from 'react'
import { Button, Icon, Header, Table, Rating } from 'semantic-ui-react'
import cover1 from './media/images/tentangkamu.jpg';
import cover2 from './media/images/bintang.jpg';
import cover3 from './media/images/negeri.jpg';
import cover4 from './media/images/anak-kuat.jpeg';
import cover5 from './media/images/hujan.jpg';

class Karya extends React.Component {
    render() {
        return(
          <div className="App-karya" align="center" background-color='grey'>
            <Table celled inverted>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell singleLine>Cover Novel</Table.HeaderCell>
                  <Table.HeaderCell>Judul Novel</Table.HeaderCell>
                  <Table.HeaderCell>Rating</Table.HeaderCell>
                  <Table.HeaderCell>Dapatkan Buku</Table.HeaderCell>
                  <Table.HeaderCell>Sinopsis</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row warning>
                  <Table.Cell>
                    <Header align="center"
                      image={cover1}
                    />
                  </Table.Cell>
                  <Table.Cell singleLine>Tentang Kamu</Table.Cell>
                  <Table.Cell>
                    <Rating icon='star' defaultRating={3} maxRating={3} />
                  </Table.Cell>
                  <Table.Cell>
                    <Button animated='vertical' color='orange'>
                      <Button.Content hidden>Beli</Button.Content>
                      <Button.Content visible>
                        <Icon name='shop' />
                      </Button.Content>
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                  "Tentang Kamu" bercerita tentang kisah perjalanan Zaman Zulkarnaen, 
                  pemuda asal Indonesia yang bekerja di salah satu firma hukum Belgrave 
                  Square, London. Zaman menapaki satu per satu rentetan cerita penelusurannya 
                  terkait ahli waris Sri Ningsih. Dari sopir bus hingga cerita penghianatan 
                  yang dialami Ningsih, kata-kata dirangkai mengalir.
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header align="center"
                      image={cover2}
                    />
                  </Table.Cell>
                  <Table.Cell singleLine>Bintang</Table.Cell>
                  <Table.Cell>
                    <Rating icon='star' defaultRating={3} maxRating={3} />
                  </Table.Cell>
                  <Table.Cell>
                    <Button animated='vertical' color='orange'>
                      <Button.Content hidden>Beli</Button.Content>
                      <Button.Content visible>
                        <Icon name='shop' />
                      </Button.Content>
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                  Novel "Bintang" merupakan novel bergenre fantasi yang menggambarkan petualangan Raib, 
                  Seli dan Ali dalam dunia paralel yang tidak banyak diketahui orang. Mereka menyebutnya 
                  Klan Bumi, Klan Bulan, Klan Matahari, dan Klan Bintang yang kemudian mengantarkan mereka 
                  bertemu dengan tokoh-tokoh hebat.
                  </Table.Cell>
                </Table.Row>
                <Table.Row warning>
                  <Table.Cell>
                    <Header align="center"
                      image={cover3}
                    />
                  </Table.Cell>
                  <Table.Cell singleLine>Negeri Di Ujung Tanduk</Table.Cell>
                  <Table.Cell>
                    <Rating icon='star' defaultRating={3} maxRating={3} />
                  </Table.Cell>
                  <Table.Cell>
                    <Button animated='vertical' color='orange'>
                      <Button.Content hidden>Beli</Button.Content>
                      <Button.Content visible>
                        <Icon name='shop' />
                      </Button.Content>
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                  Novel "Negeri Di Ujung Tanduk" mengisahkan seorang konsultan ekonomi bernama Thomas yang akhirnya berkecimpung di 
                  dunia politik. Ia bertugas memenangkan seseorang calon gubernur dalam pemilihan umum mendatang. 
                  Tugas itu membuat Thomas dan keluarganya mendapat banyaknya tekanan, baik dari media maupun dari 
                  partai lawan.
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header align="center"
                      image={cover4}
                    />
                  </Table.Cell>
                  <Table.Cell singleLine>Si Anak Kuat</Table.Cell>
                  <Table.Cell>
                    <Rating icon='star' defaultRating={3} maxRating={3} />
                  </Table.Cell>
                  <Table.Cell>
                    <Button animated='vertical' color='orange'>
                      <Button.Content hidden>Beli</Button.Content>
                      <Button.Content visible>
                        <Icon name='shop' />
                      </Button.Content>
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                  Novel "Si Anak Kuat" berkisah tentang Amelia, sesosok anak bungsu yang tegar dengan sifat keingintahuan yang 
                  tinggi. Amelia memiliki mimpi besar untuk mengemban pendidikan yang lebih tinggi. Namun, ia paham bahwa 
                  keadaannya sebagai anak bungsu akan membuatnya sulit untuk meninggalkan kampung halamannya.
                  </Table.Cell>
                </Table.Row>
                <Table.Row warning>
                  <Table.Cell>
                    <Header align="center"
                      image={cover5}
                    />
                  </Table.Cell>
                  <Table.Cell singleLine>Hujan (Pre Order)</Table.Cell>
                  <Table.Cell>
                    <Rating icon='star' defaultRating={0} maxRating={0} />
                  </Table.Cell>
                  <Table.Cell>
                    <Button animated='vertical' color='orange'>
                      <Button.Content hidden>PO</Button.Content>
                      <Button.Content visible>
                        <Icon name='shop' />
                      </Button.Content>
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                  Novel "Hujan" menceritakan tentang kisah hidup di era teknologi 
                  yang semakin canggih. Mengambil latar waktu 2050-an. Tokoh utamanya 
                  ialah seorang gadis cantik yatim piatu bermana Lail dengan teman setianya 
                  yang kerap disapa Esok.
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        )
    }
}

export default Karya;