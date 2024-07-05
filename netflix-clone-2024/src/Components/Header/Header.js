import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
<ul>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />

          
            <li>Netflix</li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse By Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <SearchIcon />
            <NotificationsNoneIcon />
            <AccountBoxIcon />
            <ArrowDropDownIcon />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header