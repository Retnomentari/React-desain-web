import React from 'react'
import satu from './media/images/satu.png'
import dua from './media/images/dua.png'
import tiga from './media/images/tiga.png'
import empat from './media/images/empat.png'
import partner1 from './media/images/partner.jpg'
import partner2 from './media/images/partner1.jpg'
import partner3 from './media/images/partner3.png'

class Beranda extends React.Component {
    render() {
        return(
            <div className="App">
                <header className="masthead">
                    <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">Selamat Datang di Tere's Libary</div>
                        <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
                        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Berikutnya...</a>
                    </div>
                    </div>
                </header>
                <section className="page-section" id="services">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Fitur</h2>
                        <h3 className="section-subheading text-muted">Beberapa fitur yang terdapat pada web ini</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Belanja</h4>
                        <p className="text-muted">Dalam web ini pengunjung dapat mengikuti pre order karya yang akan launching ataupun membeli karya yang sudah launching.</p>
                        </div>
                        <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Feedback</h4>
                        <p className="text-muted">Pengunjung dapat memberikan kritikan atau saran kepada penulis. Selain itu bagi pengunjung yang membeli buku dapat memberikan rating.</p>
                        </div>
                        <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Keamanan</h4>
                        <p className="text-muted">Situs ini merupakan situs resmi, novel yang dijual sudah pasti original dan data pribadi pembeli sangat dijaga keamanannya.</p>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="page-section" id="about">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading1 text-uppercase">Kegiatan Waktu Dekat</h2>
                        <h3 className="section-subheading text-muted">Peluncuran pertama novel HUJAN</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <ul className="timeline">
                            <li>
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src={satu} alt=""/>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                <h4>Februari 2021</h4>
                                <h4 className="subheading">Open Pre Order dan Giveaway</h4>
                                </div>
                                <div className="timeline-body">
                                </div>
                            </div>
                            </li>
                            <li className="timeline-inverted">
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src={dua} alt=""/>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                <h4>05 Maret 2021</h4>
                                <h4 className="subheading">Pengiriman Novel, Novel mulai beredar di toko</h4>
                                </div>
                                <div className="timeline-body">
                                </div>
                            </div>
                            </li>
                            <li>
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src={tiga} alt=""/>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                <h4>18 Maret 2021</h4>
                                <h4 className="subheading">Fan Meeting Via Zoom</h4>
                                </div>
                                <div className="timeline-body">
                                </div>
                            </div>
                            </li>
                            <li className="timeline-inverted">
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src={empat} alt=""/>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                <h4>20 Maret 2021</h4>
                                <h4 className="subheading">Pengumuman pemenang giveaway</h4>
                                </div>
                                <div className="timeline-body">
                                </div>
                            </div>
                            </li>
                            <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>Jangan
                                <br/>Sampai
                                <br/>Ketinggalan!</h4>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="bg-light page-section" id="team">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Bekerja Sama Dengan</h2>
                        <h3 className="section-subheading text-muted">Partner yang turut andil</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={partner1} alt=""/>
                            <h4>Liliek Oetama</h4>
                            <p className="text-muted">CEO Gramedia</p>
                            <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="#something">
                                <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#something">
                                <i className="fa fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#something">
                                <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={partner2} alt=""/>
                            <h4>Ana Sudibyo</h4>
                            <p className="text-muted">Web Developer</p>
                            <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="#something">
                                <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#something">
                                <i className="fa fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#something">
                                <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={partner3} alt=""/>
                            <h4>Yogi Prasetya</h4>
                            <p className="text-muted">Design dan Editor</p>
                            <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="#something">
                                <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#something">
                                <i className="fa fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#something">
                                <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                        <p className="large text-muted">Penulis menyampaikan banyak terima kasih 
                        atas kerja sama partner-partner di atas. Selain itu terima kasih juga saya sampaikan  
                        kepada para penikmat karya saya yang selalu mensupport dan memberi dukungan.</p>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="page-section" id="contact">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Feedback</h2>
                        <h3 className="section-subheading text-muted">Kritikan dan Saran dapat disampaikan melalui form di bawah ini</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder="Nama Terang *" required="required" data-validation-required-message="Please enter your name."/>
                                <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                <input className="form-control" id="email" type="email" placeholder="Masukkan Email *" required="required" data-validation-required-message="Please enter your email address."/>
                                <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                <input className="form-control" id="phone" type="tel" placeholder="Nomor Telepon *" required="required" data-validation-required-message="Please enter your phone number."/>
                                <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                <textarea className="form-control" id="message" placeholder="Ketikkan kritikan dan saran Anda *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="col-lg-12 text-center">
                                <div id="success"></div>
                                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Kiim Feedback</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </section>

                <footer className="footer">
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                        <span className="copyright">Retno Mentari &copy; XI RPL 4 / 39</span>
                        </div>
                        <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                            <a href="#something">
                                <i className="fa fa-twitter"></i>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#something">
                                <i className="fa fa-facebook-f"></i>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#something">
                                <i className="fa fa-instagram"></i>
                            </a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-4">
                        <ul className="list-inline quicklinks">
                            <li className="list-inline-item">
                            <a href="#something">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#something">Terms of Use</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Beranda;