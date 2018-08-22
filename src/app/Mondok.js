import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap'

class Home extends Component {
  render() {
    return (
        <main>
          <section>
            <Jumbotron className="bg-blur text-center">
              <h1 className="display-3">Mondok by Santren Koding</h1>
              <p className="lead">Kegiatan Belajar Intensif 3 tahun Programming dan Qur'an</p>
              <p className="lead">
              <a href="https://s.id/daftarmondok">
                <Button color="success">Daftar Sekarang!</Button>
              </a>
              </p>
            </Jumbotron>
          </section>
          <section>
            <div className="container">
              <div className="row p-3">
                <div className="col-md-12">
                  <h2 className="text-center">KABAR GEMBIRA UNTUK KAMU YANG PASSION DIBIDANG IT</h2>
                  <p className="text-center">Santren Koding saat ini sedang membuka pendaftaran santri baru.
                    Bidang keahlian yang dibuka adalah Mobile Development dan Web Development dengan jenjang 3 tahun lama masa pembelajaran dan live project.</p>
                </div>
              </div>
              <div className="row">
                  <div className="col-md-6">
                    <img width="100%" src="http://i67.tinypic.com/2m2gkyp.png" alt="Mondok Santren Koding" />
                  </div>
                  <div className="col-md-6">
                    <h4>Fasilitas</h4>
                    <ul>
                      <li>GRATIS BIAYA PENDIDIKAN</li>
                      <li>GRATIS UANG MAKAN DAN ASRAMA</li>
                      <li>TEMPAT BELAJAR YANG NYAMAN</li>
                      <li>RIHLAH 2 BULAN SEKALI</li>
                    </ul>
                    <h4>Fasilitas</h4>
                    <ul>
                      <li>MUSLIM</li>
                      <li>LAKI-LAKI (USIA MAKS 23TH)</li>
                      <li>MENGINAP/TINGGAL DI ASRAMA</li>
                      <li>BUKAN YANG MENGHALALKAN ROKOK</li>
                      <li>BERSUNGGUH-SUNGGUH</li>
                      <li>MEMPUNYAI LAPTOP</li>
                      <li>WAJIB HOBI NGODING</li>
                      <li>SIAP BELAJAR 16 JAM/HARI</li>
                    </ul>
                    <h4>PERIODE</h4>
                    <ul>
                      <li>PERIODE 1: Pendaftaran Tutup 18 Maret 2018</li>
                      <li>PERIODE 2: Pendaftaran Tutup 31 Mei 2018</li>
                      <li>PERIODE 3: Pendaftaran Tutup 1 Juli 2018</li>
                      <li>Muslimah (Untuk Perempuan): Coming soon...</li>
                    </ul>
                  </div>
              </div>
              <div className="row p-3">
                <div className="col-md-12" align="center">
                  <a href="https://s.id/daftarmondok">
                    <Button color="success">Daftar Sekarang!</Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
    )
  }
}

export default Home
