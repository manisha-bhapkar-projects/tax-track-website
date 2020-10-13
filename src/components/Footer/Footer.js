import React, { Component } from 'react';

const Footer = () => {
    return (
        <>
            <div className="app-wrapper-footer">
                <div className="app-footer">
                    <div className="app-footer__inner">
                        <div className="app-footer-left">
                            <ul className="nav">
                                <li className="nav-item">
                                    <p>All Rights Reserved. © <a href="https://www.initor-global.com/" target="_blank">initor global</a> </p>
                                    {/* <a href="javascript:void(0);" class="nav-link">
                                          Footer Link 1
                                      </a> */}
                                </li>
                                {/* <li class="nav-item">
                                  <a href="javascript:void(0);" class="nav-link">
                                          Footer Link 2
                                      </a>
                              </li> */}
                            </ul>
                        </div>
                        <div className="app-footer-right">
                            <ul className="nav">
                                {/* <li class="nav-item">
                                  <a href="javascript:void(0);" class="nav-link">
                                          Footer Link 3
                                      </a>
                              </li>
                              <li class="nav-item">
                                  <a href="javascript:void(0);" class="nav-link">
                                      <div class="badge badge-success mr-1 ml-0">
                                          <small>NEW</small>
                                      </div>
                                      Footer Link 4
                                  </a>
                              </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

Footer.propTypes = {};

export default Footer;
