import React, { Component } from 'react'
import { Jumbotron, Button, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
        <main>
          <section>
            <Jumbotron className="bg-blur text-center">
              <h1 className="display-3">Belajar Jadi Asyik!</h1>
              <p className="lead">Kegiatan Belajar Intensif Programming dan Qur'an bersama Santren Koding.</p>
              <p className="lead">
                <a href="#pelatihan">
                  <Button color="success">Mulai Belajar</Button>
                </a>
              </p>
            </Jumbotron>
          </section>
          <section id="pelatihan">
            <div className="container">
              <div className="row p-3">
                <div className="col-md-12">
                  <h2 className="text-center">Daftar Kajian Koding Rutin</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Card>
                    <CardImg top width="100%" src="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg" alt="ReactJS + Firebase" />
                    <CardBody>
                      <CardTitle>Kajian Koding #3</CardTitle>
                      <CardText>ReactJS dan Firebase Auth/Hosting</CardText>
                      <CardText>
                        <small className="text-muted float-left">by Santren Koding</small>
                        <small className="text-danger float-right">Kouta Terbatas</small>
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-md-4">
                  <Card>
                    <CardImg top width="100%" src="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381" alt="HTML, CSS & Bootstrap Dasar" />
                    <CardBody>
                      <CardTitle>Kajian Koding #2</CardTitle>
                      <CardText>HTML, CSS & Bootstrap Dasar</CardText>
                      <CardText>
                        <small className="text-muted float-left">by Santren Koding</small>
                        <small className="text-danger float-right">Kouta Terbatas</small>
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-md-4">
                  <Card>
                    <CardImg top width="100%" src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572" alt="Laravel Dasar" />
                    <CardBody>
                      <CardTitle>Kajian Koding #1</CardTitle>
                      <CardText>Belajar Laravel Dasar</CardText>
                      <CardText>
                        <small className="text-muted float-left">by Santren Koding</small>
                        <small className="text-danger float-right">Kouta Terbatas</small>
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div className="row p-3">
                <div className="col-md-12" align="center">
                  <Link to='/kajiankoding'>
                    <Button outline color="success">Lihat Seluruh Kajian Koding</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <hr/>
          <section>
            <div className="container">
              <div className="row p-3">
                <div className="col-md-12">
                  <h2 className="text-center">Daftar Santren Kilat Koding</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Card>
                    <CardImg top width="100%" src="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg" alt="ReactJS + Firebase" />
                    <CardBody>
                      <CardTitle>Santren Kilat #1 (Coming Soon)</CardTitle>
                      <CardText>4 Hari Intensif Laravel</CardText>
                      <CardText>
                        <small className="text-muted float-left">by Santren Koding</small>
                        <small className="text-danger float-right">Kouta Terbatas</small>
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div className="row p-3">
                <div className="col-md-12" align="center">
                  <Link to='/santrenkilat'>
                    <Button outline color="success">Lihat Seluruh Santren Kilat</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <hr/>
          <section>
            <div className="container">
              <div className="row border text-center">
                <div className="col-md-6 bg-success text-light">
                  <div className="p-3">
                    <h4>Kegiatan</h4>
                    <br/>
                    <p>Koding</p>
                    <p>Belajar Agama dan Al Qur'an</p>
                    <p>Pendidikan Karakter</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3">
                    <img src="http://i63.tinypic.com/oid9xu.png" alt="Logo Santren Koding"/>
                    <h4>"Memberi Manfaat Untuk Ummat"</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr/>
          <section>
            <div className="container">
              <div className="row p-3">
                <div className="col-md-12">
                  <h2 className="text-center">Mondok by Santren Koding</h2>
                  <p className="text-center">Sebuah Kegiatan Belajar Intensif Programming & Al Qur'an Selama 3 Tahun hingga jaminan kerja</p>
                </div>
              </div>
              <div className="row">
                <div align="center">
                  <div className="col-md-4">
                    <img width="100%" src="http://i67.tinypic.com/2m2gkyp.png" alt="Mondok Santren Koding" />
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col-md-12" align="center">
                  <Link to='/mondok'>
                    <Button outline color="success">Lihat Selengkapnya</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <hr/>
          <section>
            <div className="container">
              <div className="row p-3">
                <div className="col-md-12">
                  <h2 className="text-center">Sponsor & Partner</h2>
                </div>
              </div>
              <div className="row p-3">
                <div align="center" className="col-md-12">
                  <img width="40%" src="http://i67.tinypic.com/2hcn70k.jpg" className="img-fluid" alt="klinikita"/>
                </div>
              </div>
              <div className="row p-3">
                <div className="col-md-2">
                  <img width="100px" src="https://1.bp.blogspot.com/-GZjl-D1QU6k/WgpvD8krquI/AAAAAAAAE0Y/tkrHzHHdt-4BdvmofUT7vuNtjG4ANIRPQCLcBGAs/s400/Undip.png" className="img-fluid" alt="undip"/>
                </div>
                <div className="col-md-2">
                  <img width="100px" src="http://adiwibowo.files.wordpress.com/2012/10/logo-udinus.png?resize=370%2C358" className="img-fluid" alt="udinus"/>
                </div>
                <div className="col-md-2">
                  <img width="100px" src="https://upload.wikimedia.org/wikipedia/id/archive/6/6a/20150926142003%21Logo_unisbank.jpg" className="img-fluid" alt="unisbank"/>
                </div>
                <div className="col-md-2">
                  <img width="100px" src="http://id.indonesiayp.com/img/id/c/1445918663-86-pt-java-valley-technology.png" className="img-fluid" alt="javavalley"/>
                </div>
                <div className="col-md-2">
                  <img width="100px" src="https://dynamiclearningid.files.wordpress.com/2017/01/orderdilla.png?w=500" className="img-fluid" alt="dynamiclearning"/>
                </div>
                <div className="col-md-2">
                  <img width="100px" src="https://www.go-mekanik.com/assets/public/src/imgs/gomekanik/logo.png" className="img-fluid" alt="gomekanik"/>
                </div>
              </div>
              <div className="row p-3">
                <div className="col-md-3">
                  <img width="100px" src="http://sdk.semarangkota.go.id/web/pemkot.png" className="img-fluid" alt="sdk"/>
                </div>
                <div className="col-md-3">
                  <img width="100px" src="http://www.sandec.org/images/sandec-logo.png" className="img-fluid" alt="sandec"/>
                </div>
                <div className="col-md-3">
                  <img width="100px" src="http://i64.tinypic.com/28v94w6.png" className="img-fluid" alt="semaranggoopen"/>
                </div>
                <div className="col-md-3">
                  <img width="100px" src="http://sdk.semarangkota.go.id/komunitas/logokomunitas/20161215114909logo-p.png" className="img-fluid" alt="programmersemaran"/>
                </div>
              </div>
            </div>
          </section>
        <hr/>
          <section>
            <div className="container">
              <div className="text-center p-3">
              <h4>Kontak</h4>
                <ul className="list-unstyled">
                  <li>082225111587</li>
                  <li>santrenkoding@gmail.com</li>
                </ul>
                <br/>
                <ul className="list-unstyled">
                  <li> Titik Ruang Space,</li>
                  <li>Jl. Ngesrep Tim. III No.67, Sumurboto, Banyumanik,</li>
                  <li>Kota Semarang, Jawa Tengah 50269</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
    )
  }
}

export default Home
