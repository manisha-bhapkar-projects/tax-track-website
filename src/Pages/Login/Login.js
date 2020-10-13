import React, { useState } from "react";
import logo from '../../assets/images/logo.png';
import robot from '../../assets/images/robot.png';
import { withRouter } from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";
import constants from "../../utils/constants";
import { storeAuthToken, storeRefreshToken, storeAdminData } from '../../utils/storage';



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameErr, setUsernameErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});
    const history = useHistory();

    const onSubmit = e => {

        e.preventDefault();
        const isValid = validate();
        if(isValid){
           history.push(constants.ROUTE.SIDEBAR.DASHBORD)
        }
       

    }
    const validate = (values) => {
        const usernameErr = {};
        const passwordErr = {};
        let isValid = true;
        if(username == ''){
            usernameErr.empty = "Username is Required ";
            isValid = false;
        }
        if(password == ''){
            passwordErr.empty = "Password is Required ";
            isValid = false;
        }
        setUsernameErr(usernameErr);
        setPasswordErr(passwordErr);
        return isValid;


    }

    return (
        <section className="login-home_section ">
            <div className="row ml-0 mr-0 d-flex align-items-center login-row">
                <div className="col-md-6 login-banner">
                </div>
                <div className="col-md-6">
                    <div className="login-form">
                        <div className="text-center mb-5">
                            <img src={require('../../assets/images/logo.png')} alt="" />
                        </div>
                        <div className="mb-5 text-center">
                            <h1>
                                Login
                            </h1>
                        </div>
                        <div className="pr-5 pl-5">
                            <div className="form-group login-form">
                                <div className="row d-flex align-items-center">
                                    <div className="col-1 text-center">
                                        <i className="nav-link-icon fa fa-user"> </i>
                                    </div>
                                    <div className="col-11">
                                        <input type="text"
                                            name="username"
                                            id="userName"
                                            placeholder="User Name"
                                            className="form-control"
                                            value={username}
                                            onBlur={validate}
                                            onChange={(e) => { setUsername(e.target.value) }} />
                                           {Object.keys(usernameErr).map((key)=>{
                                           return <div className="errormsg">{usernameErr[key]}</div>
                                       })}
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row d-flex align-items-center">
                                    <div className="col-1 text-center">
                                        <i className="nav-link-icon fa fa-asterisk"> </i>
                                    </div>
                                    <div className="col-11 pass-login">
                                        <input
                                            type="password"
                                            name="password"
                                            id="userPassword"
                                            placeholder="Password"
                                            className="form-control"
                                            value={password}
                                            onBlur={validate}
                                            onChange={(e) => { setPassword(e.target.value) }} />
                                                {Object.keys(passwordErr).map((key)=>{
                                           return  <div className="errormsg">{passwordErr[key]}</div>
                                       })}
                                       
                                        <a href="#" className="show-password">
                                            <i className="nav-link-icon fa fa-eye"> </i>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-right mt-3">
                                    <Link to="/forgotPassword"
                                        style={{ textDecoration: 'none' }}>Forgot Password</Link>
                                </div>
                            </div>
                            {/* <div className="robot text-center mb-4">
                                <img src={robot} alt="robot" />
                            </div> */}
                            <div className="form-group text-center">

                                <button className="btn-cutom btn" onClick={onSubmit}>Login</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default withRouter(Login);




















// import React, { useState } from "react";
// import logo from '../../assets/images/logo.png';
// import robot from '../../assets/images/robot.png';
// import { useFormik } from 'formik';
// import { Link, useHistory } from "react-router-dom";
// import { storeAuthToken, storeRefreshToken, storeAdminData } from '../../utils/storage';



// const Login = () => {

//     const history = useHistory();

//     const initialValues = {
//         username: '',
//         password: ''
//     }

//     const onSubmit = values => {

//         validate(values);



//         storeAuthToken("lajhvsljavskahgsakhsgda")
//         storeRefreshToken("hgacskahgsckashgcakshgcashgcaavhslauvh")
//         storeAdminData({ name : "tech" })

//         history.push("/dashboard")

//     }
//     const validate = values => {
//         let errors = {}
//         if (!values.username) {
//             errors.username = 'Username is Required'
//         }

//         if (!values.password) {
//             errors.password = 'Password is Required'
//         }

//         return errors


//     }
//     const formik = useFormik({
//         initialValues,
//         onSubmit,
//         validate
//     })

//     return (
//         <section className="login-home_section ">
//             <div className="row ml-0 mr-0 d-flex align-items-center login-row">
//                 <div className="col-md-6 login-banner">
//                 </div>
//                 <div className="col-md-6">
//                     <div className="login-form">
//                         <div className="text-center mb-5">
//                         <img src={require('../../assets/images/logo.png')} alt=""/>
//                         </div>
//                         <div className="mb-5 text-center">
//                             <h1>
//                                 Login
//                             </h1>
//                         </div>
//                         <form className="pr-5 pl-5">
//                             <div className="form-group login-form">
//                                 <div className="row d-flex align-items-center">
//                                     <div className="col-1 text-center">
//                                         <i className="nav-link-icon fa fa-user"> </i>
//                                     </div>
//                                     <div className="col-11">
//                                         <input type="text"
//                                             name="username"
//                                             id="userName"
//                                             placeholder="User Name"
//                                             className="form-control"
//                                             value={formik.values.username}
//                                             onChange={formik.handleChange}
//                                             onBlur={formik.handleBlur} />
//                                         {formik.errors.username ? <div className="errormsg">{formik.errors.username}</div> : null}
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="form-group">
//                                 <div className="row d-flex align-items-center">
//                                     <div className="col-1 text-center">
//                                         <i className="nav-link-icon fa fa-asterisk"> </i>
//                                     </div>
//                                     <div className="col-11 pass-login">
//                                         <input
//                                             type="password"
//                                             name="password"
//                                             id="userPassword"
//                                             placeholder="Password"
//                                             className="form-control"
//                                             value={formik.values.password}
//                                             onChange={formik.handleChange}
//                                             onBlur={formik.handleBlur} />
//                                         {formik.errors.password ? <div className="errormsg">{formik.errors.password}</div> : null}
//                                         <a href="#" className="show-password">
//                                             <i className="nav-link-icon fa fa-eye"> </i>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div className="text-right mt-3">
//                                     <Link to="/forgotPassword"
//                                      style={{ textDecoration: 'none' }}>Forgot Password</Link>
//                                 </div>
//                             </div>
//                             {/* <div className="robot text-center mb-4">
//                                 <img src={robot} alt="robot" />
//                             </div> */}
//                             <div className="form-group text-center">

//                                     <button  className="btn-cutom btn">Login</button>

//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>


//     );
// }

// export default Login;
