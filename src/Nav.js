import React from "react";
import "./Nav.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Nav() {
    
  return (
    <div className="nav">
      <div className="lefthead">
        <h2>CRooKed</h2>
      </div>
      <div className="right">
      <p>Follow US On:</p>
      <div className="icons">       
      <InstagramIcon/>
      <FacebookIcon/>
      <LinkedInIcon/>
      <GitHubIcon/>
      </div>
       
     </div>
    </div>
  );
}

export default Nav;
