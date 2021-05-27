import React, { useState } from 'react'
import Forgot from '../componets/Forgot'
import Loginbox from '../componets/Loginbox'
import Signup from '../componets/Signup'
import './Login.css'

function Login() {
    const [signState, setsignstate] = useState(true)
    const [signupState, setsignupstate] = useState(false)
    const [forgotState, setforgotstate] = useState(false)

    return (

        <div className="loginbox">
            <div className="sign-log-button">
                <ln className="signin textcolor" onClick={() => { setsignstate(true); setsignupstate(false);setforgotstate(false) }}  >SIGN IN</ln>

                <ln className=" signup" onClick={() => { setsignstate(false); setsignupstate(true);setforgotstate(false) }} >SIGN UP</ln>
            </div>
            
            { signState && <Loginbox />}
            { signupState && <Signup />}
            { forgotState && <Forgot />}
            
            <div className="forgot" ><a className="forgot1 "  onClick={() => {setforgotstate(true); setsignstate(false); setsignupstate(false); }}>Forgot Password?</a>
                </div>
        </div>

    )
}

export default Login