import React from 'react'
import './header.scss';
import TwitterLogo from '../../assets/img/twitter-logo.png'

const Header = () => {
    return ( 
        <div className="header">
             <img src={TwitterLogo} alt="Tweet Simulator"/>
             <h1>Tweets simulator</h1>
        </div>
     );
}
 
export default Header;