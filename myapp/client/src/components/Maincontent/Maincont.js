import React from 'react'
import './Maincont.css'
import {Link} from 'react-router-dom'
function Maincont() {
    return (
        <div className="main__container--mainContent">
            <p>Have You Ever Wondered Why You Are Forgetting Your Important Tasks? Leave Them Behind. You Are At The Right Place. This app Brings Your Daily Medical Doses Tracking Into a Single Place Of Management.</p>
            <Link to="/signin"><button >Get started</button></Link>
        </div>
    )
}

export default Maincont
