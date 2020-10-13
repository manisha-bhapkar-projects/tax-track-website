import React, { Component, useState } from 'react';
import qriouslogo from '../../assets/images/avatars/1.jpg';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import constants from '../../utils/constants';
const Header = ({ onSidebarClick }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [istoggle, setIsToggle] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const history = useHistory();



  const handleSearch = (e) => {
    setSearch(!isSearch)
  }
  const handleToggle = (e) => {
    setIsToggle(!istoggle)
  }

  const handleCollapse = (e) => {
    setIsSidebar(!isSidebar)
  }
  return (
    <>
      <div className="app-header header-shadow">
        <div className="app-header__logo">
          <div className="logo-src" />
          <div className="header__pane ml-auto">
            <div>
              <button type="button" onClick={() => {
                handleCollapse();
                onSidebarClick(isSidebar)
              }}
                className={`hamburger close-sidebar-btn hamburger--elastic ${isSidebar ? 'is-active' : ''}`} data-class="closed-sidebar">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="app-header__mobile-menu">
          <div>
            <button type="button"
              onClick={() => {
                handleCollapse();
                onSidebarClick(isSidebar)
              }
              } className={`hamburger hamburger--elastic mobile-toggle-nav ${isSidebar ? 'is-active' : ''}`}>
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
        <div className="app-header__menu">
          <span>
            <button type="button" 
            className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
              <span className="btn-icon-wrapper">
                <i className="fa fa-ellipsis-v fa-w-6" />
              </span>
            </button>
          </span>
        </div>

        {history.location.pathname == "/dashboard" ?
          null :
          <div
            class="search-wrapper"
            onClick={handleSearch}
            className={`search-wrapper ${isSearch ? "active" : ""}`}
          >
            <div class="input-holder">
              <input
                type="text"
                class="search-input"
                placeholder="Type to search"
              />
              <button class="search-icon">
                <span></span>
              </button>
            </div>
            <button class="close"></button>
          </div>}

        <div className="app-header__content">
          <div className="app-header-left">

          </div>
          <div className="app-header-right">
            <div className="header-btn-lg pr-0">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    <div className="btn-group mr-3">
                      <a className="p-0 btn">
                        <img width={150} className src={qriouslogo} alt
                          onClick={() => { history.push(constants.ROUTE.SIDEBAR.PROFILE) }} />
                      </a>
                    </div>
                  </div>
                  <div onClick={handleToggle}
                    className={`d-inline-block dropdown mr-3 ${istoggle ? 'show' : ''}`}>
                    <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
                      className="btn-shadow dropdown-toggle btn btn-custom-notify">
                      <span className="btn-icon-wrapper p-2 opacity-7">
                        <i className="fa fa-bell fa-w-20" />
                      </span>
                    </button>
                    <div onClick={handleToggle}
                      tabIndex={-1} role="menu" aria-hidden="true"
                      className={`dropdown-menu dropdown-menu-right ${istoggle ? 'show' : ''}`}
                      x-placement="bottom-end" style={{ position: 'absolute', willChange: 'transform', top: 12, left: -70, transform: 'translate3d(-131px, 33px, 0px)' }}>
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a href="javascript:void(0);" className="nav-link">
                            <i className="nav-link-icon lnr-inbox" />
                            <span>
                              Employee Data Succuessfull
                      </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="javascript:void(0);" className="nav-link">
                            <i className="nav-link-icon lnr-book" />
                            <span>
                              Task
                      </span>
                          </a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

Header.propTypes = {};

export default Header;
