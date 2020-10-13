import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import constants from '../../utils/constants';

const Sidebar = (props) => {
    const history = useHistory();
    const sidebar = [

        {
            title: 'Home',
            path: constants.ROUTE.SIDEBAR.DASHBORD,
            icon: "metismenu-icon pe-7s-home",
            cName: 'nav-text',
            childrens: []
        },
        {
            title: 'My Profile',
            path: constants.ROUTE.SIDEBAR.PROFILE,
            icon: "metismenu-icon pe-7s-user",
            cName: 'nav-text',

            childrens: []
        },
        {
            title: 'Contact Us',
            path: constants.ROUTE.SIDEBAR.CONTACT_US,
            icon: "metismenu-icon pe-7s-call",
            cName: 'nav-text',

            childrens: []
        },


    ];

    const handleClick = (index) => {
        let item = sidebar[index];
        if (item.childrens.length === 0) {
            props.history.push(item.path)
        }
        else {
            return

        }
    }

    return (
        <>
            <div className="app-sidebar sidebar-shadow">
                <div className="app-header__logo">
                    <div className="logo-src">
                    </div>
                    <div className="header__pane ml-auto">
                        <div>
                            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="app-header__mobile-menu">
                    <div>
                        <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                            <span className="hamburger-box">
                                <span className="hamburger-inner" />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="app-header__menu">
                    <span>
                        <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                            <span className="btn-icon-wrapper">
                                <i className="fa fa-ellipsis-v fa-w-6" />
                            </span>
                        </button>
                    </span>
                </div>
                {/* menu */}
                <div className="scrollbar-sidebar">
                    <div className="app-sidebar__inner">
                        <ul className="vertical-nav-menu custom-menu">
                            <li>
                                {sidebar.map((item, index) => {
                                    return (
                                        <li onClick={() => handleClick(index)}>
                                            {history.location.pathname.includes(item.path) ?
                                                <a className="mm-active" > <i className={item.icon}></i>      {item.title} </a> :
                                                <a> <i className={item.icon}></i>{item.title}</a>
                                            }
                                        </li>
                                    )
                                })}
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}

Sidebar.propTypes = {};

export default withRouter(Sidebar);
