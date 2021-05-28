import React ,{ useState } from 'react'
import Enterotp from './Enterotp'
import Getotp from './Getotp'
import Newpass from './Newpass'

function Forgot() {
    const [signState, setsignstate] = useState(true)
    return (<div>
        <Getotp/>
        <Enterotp/>
         <Newpass/>
         </div>
    )
}

export default Forgot
