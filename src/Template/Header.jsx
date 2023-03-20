import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <img src='/public/logo192.png' alt='Etklm 3rby Logo' />
                </div>
                <div className="col-md-9">
                      <nav class="navbar navbar-expand-sm navbar-light bg-primary">
                          <div class="container-fluid">
                              {/* <Link class="navbar-brand" to={``}>primary</Link> */}
                              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                                  aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                                  <span class="navbar-toggler-icon"></span>
                              </button>
                              <div class="collapse navbar-collapse" id="navbarID">
                                  <div class="navbar-nav">
                                      {/* <Link class="nav-link active" aria-current="page" to={``}>Home</Link> */}
                                      
                                  </div>
                              </div>
                          </div>
                      </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }
}
