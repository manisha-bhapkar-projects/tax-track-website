import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';


const ForgotPassword = () => {

    return (
        <section className="login-home_section ">
            <div className="row ml-0 mr-0 d-flex align-items-center login-row">
                <div className="col-md-6 login-banner">
                </div>
                <div className="col-md-6">
                    <div className="login-form">
                        <div className="text-center mb-5">
                            <img src={logo} alt />
                        </div>
                        <div className="mb-5 text-center">
                            <h1>
                                Forgot Password
          </h1>
                        </div>
                        <form className="pr-5 pl-5">
                            <div className="form-group login-form">
                                <p className="text-center mb-4 ">
                                    Write your email address below and we will send you password in your email
            </p>
                                <div className="row d-flex align-items-center">
                                    <div className="col-1 text-center">
                                        <i className="nav-link-icon fa fa-envelope"> </i>
                                    </div>
                                    <div className="col-11">
                                        <input type="text" name="userName" id="userName" placeholder="Enter Your Email" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group text-center mt-5">
                                <button className="btn btn-cutom">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )

}



export default ForgotPassword;
