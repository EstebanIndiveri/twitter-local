import React from 'react'
import './header.scss';
import TwitterLogo from '../../assets/img/twitter-logo.png';
import Headroom from 'react-headroom'

const Header = () => {
    return ( 
        <div className="header">
             <Headroom style={{
               alignContent:'center',
               transition: 'all .5s ease-in-out',
               alignItems:'center',
               textAlign:"center"
               
               }}>
             <img src={TwitterLogo} alt="Tweet Simulator"/>
             <h1>Tweets simulator</h1>
             </Headroom>
        </div>
     );
}
 
export default Header;