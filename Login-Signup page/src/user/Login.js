import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react"
import {useDispatch} from "react-redux";
import * as userAction from '../redux/user/user.actions'



let Login = () => {

    let dispatch = useDispatch();
   


    let [userInfo , setUserInfo] = useState({
        email : '',
        password : ''
    });

    let [userInfoError , setUserInfoError] = useState({
        emailError : '',
        passwordError : ''
    });

    let validateUserEmail = (event) => {

        setUserInfo({
            ...userInfo,
            email : event.target.value
        })
        let regExp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
        (!regExp.test(event.target.value)) ? setUserInfoError({...userInfoError,emailError: 'Enter a valid Email'}) :setUserInfoError({...userInfoError,emailError: ''})
    };


    let validateUserPassword = (event) => {

        setUserInfo({
            ...userInfo,
            password : event.target.value
        })
        let regExp = /^[A-za-z]\w{7,14}$/;
        (!regExp.test(event.target.value)) ? setUserInfoError({...userInfoError,passwordError: 'Enter a valid Password'}) :setUserInfoError({...userInfoError,passwordError: ''})
    };

    // send user data to server

    let loginUser = (event) => {
        event.preventDefault()
        
        let {email,password} = userInfo
        if (email==='' || password ===''){
            console.alert("Please fill in the field")
        }
        else
        {
            dispatch(userAction.userLogin(userInfo))
            alert("login success full")
        }
    }

    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 m-auto">
                            <div className="card animated zoomIn" >
                                <div className="card-header bg-dark text-white text-center">
                                    <p className="h3">Login Here</p>
                                </div>
                                <div className="card-body bg-light">
                                    <form action="" onSubmit={loginUser}>
                                        <div className="form-group">
                                            <input
                                                name="email"
                                                value={userInfo.email}
                                                onChange={validateUserEmail}
                                                type="email" className={`form-control ${ userInfoError.emailError.length > 0 ? 'is-invalid ' : ''} `} placeholder="Email"/>
                                            {userInfoError.emailError.length > 0 ? <small className="text-danger">{userInfoError.emailError}</small>: ''}
                                        </div>

                                        <div className="form-group">
                                            <input
                                                name="password"
                                                value={userInfo.password}
                                                onChange={validateUserPassword}
                                                type="password" className={`form-control ${ userInfoError.passwordError.length > 0 ? 'is-invalid ' : ''} `} placeholder="Password"/>
                                            {userInfoError.passwordError.length > 0 ? <small className="text-danger">{userInfoError.passwordError}</small>: ''}
                                        </div>

                                        <div>
                                            <input type="submit" className="btn btn-secondary btn-sm" value="Login"/>
                                        </div>
                                        <small>
                                            Don't have an Account?  <Link to="/user/register">Register</Link>
                                        </small>
                                    </form>
                                </div>
        
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );

};
 export default Login;

