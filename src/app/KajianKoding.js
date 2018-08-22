import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'

class KajianKoding extends Component {
  render() {
    return (
        <main>
          <section>
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
            </div>
          </section>
        </main>
    )
  }
}

export default KajianKoding
