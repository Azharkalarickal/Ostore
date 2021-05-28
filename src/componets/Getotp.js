import React from 'react'

function Getotp() {
   
    return (
        <div className="signinbox">
        <img className="logicon" src="../images/password.jpg" alt="Loading.." />
        
            <form className="signinform">
                <input className="textbox" type="text" placeholder="Username" name="username" required></input><br />
                
                <button  className="sbutton" type="submit" > Get OTP </button>
            </form>
            <div className="forgot">.</div>
                </div>

       
    )
}

export default Getotp
