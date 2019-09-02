/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./Header.css";
const Header = ({ socialIcons, logo }) => {
  return (
    <div className="header">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
        integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
        crossorigin="anonymous"
      />

      <p className="logo">{logo}</p>
      <div className="social">
        {socialIcons.map(icon => (
          <i className={icon} />
        ))}
      </div>
      <hr className="line" />
    </div>
  );
};

export default Header;
