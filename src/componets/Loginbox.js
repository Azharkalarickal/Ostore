import React from 'react'

function Loginbox() {
    
    return (
        <div className="signinbox">
        <img className="logicon" src="../images/loginicon.png" alt="Loading.." />
        
            <form className="signinform">
                <input className="textbox" type="text" placeholder="Username" name="username" required></input><br />
                <input className="textbox" type="password" placeholder="Password" name="password" required></input><br />
                <button className="sbutton" type="submit">Sign In</button>
            </form>
            

        </div>


        
    )
}

export default Loginbox
