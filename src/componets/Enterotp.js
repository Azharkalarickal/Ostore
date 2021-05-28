import React from 'react'

function Enterotp() {
    return (
        <div className="signinbox">
        <img className="logicon" src="../images/password.jpg" alt="Loading.." />
        
            <form className="signinform">
                <input className="textbox" type="text" placeholder="Enter OTP" name="username" required></input><br />
                
                <button className="sbutton" type="submit">Next</button>
            </form>
            <div className="forgot"><a className="forgot1" href="url">Resent OTP</a>
                </div>

        </div>
    )
}

export default Enterotp
