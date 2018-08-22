import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'

class SantrenKilat extends Component {
  render() {
    return (
        <main>
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
            </div>
          </section>
        </main>
    )
  }
}

export default SantrenKilat
