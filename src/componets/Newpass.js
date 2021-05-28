import React from 'react'

function Newpass() {
    return (
        <div className="signinbox">
        <img className="logicon" src="../images/password.jpg" alt="Loading.." />
        
            <form className="signinform">
                <input className="textbox" type="text" placeholder="Enter New Password" name="username" required></input><br />
                <input className="textbox" type="password" placeholder="Re Enter Password" name="password" required></input><br />
                <button className="sbutton" type="submit">Change Password</button>
            </form>
            <div className="forgot">.</div>
                

        </div>
    )
}

export default Newpass
