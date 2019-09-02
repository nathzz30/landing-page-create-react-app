import React from "react";
import "./Menu.css";

const Menu = ({ title, items }) => {
  return (
    <div className="Menu">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
        integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
        crossorigin="anonymous"
      />
      <h5 className="MenuTitle">{title}</h5>
      <hr className="MenuLine" />
      <ul>
        {items.map(item => {
          if (item.menu) {
            return (
              <div className="subMenu">
                <div className="subTitle">
                  <li className="Item">{item.name}</li>
                  <i className="fas fa-angle-up" />
                </div>
                <ul>
                  {item.submenu.map(subItem => {
                    return (
                      <div>
                        <li className="subItem">{subItem.name}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            );
          } else {
            return (
              <div className="list">
                <li className="Item">{item.name}</li>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Menu;
