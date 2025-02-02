import  React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css"
const Footer = () => {
  return (
    <div className="Footer_Outer-Container">
      <div className="footer_inner_container ">
        <div className=" footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="Footer_data">
          <div>
            <ul>
              <li>Audio Descriptions</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help center</li>
              <li>Jobs</li>
              <li>Cookie preferances</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Teams Of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li> Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copy_write">
          &copy; 1997-2024 Netflix, Inc. 
        </div>
      </div>
    </div>
  );
}

export default Footer