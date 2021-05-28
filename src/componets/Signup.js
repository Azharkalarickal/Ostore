import React from 'react'

function Signup() {
    return (
        <div className="signupbox">
        <form>
        <img className="logicon" src="../images/uploadpic.png" alt="Loading.." />
        <input className="logiconup" type="file" accept="image/*" name="avatar"  alt="submit"/>
            <div className="signinform">
                <input className="textbox" type="text" placeholder="Username" name="username" required></input><br />
                <input className="textbox" type="text" placeholder="UserEmail" name="UserEmail" required></input><br />
                <input className="textbox" type="password" placeholder="Password" name="password" required></input><br />
                <button className="sbutton" type="submit">Sign Up</button>
            </div></form>
           

        </div>
    )
}

export default Signup
