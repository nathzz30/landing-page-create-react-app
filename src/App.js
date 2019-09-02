import React from "react";
import "./App.css";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Article from "./Components/Article/Article";
import Copyright from "./Components/Copyright/Copyright";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Menu from "./Components/Menu/Menu";

function App() {
  const contacts = [
    {
      icon: "fas fa-envelope",
      info: "information@untitled.tld"
    },
    {
      icon: "fas fa-phone",
      info: "(000) 000-0000"
    },
    {
      icon: "fas fa-home",
      info: "1234 Somewhere Road #8254 Nashville, TN 00000-0000"
    }
  ];

  const items = [
    { menu: false, name: "HOMEPAGE" },
    { menu: false, name: "GENERIC" },
    { menu: false, name: "ELEMENTS" },
    {
      menu: true,
      name: "SUBMENU",
      submenu: [
        { name: "LOREM DOLOR" },
        { name: "IPSUM ADIPISCING" },
        { name: "TEMPUS MAGNA" },
        { name: "FEUGIAT VEROEROS" }
      ]
    },
    { menu: false, name: "ETIAM DOLORE" },
    { menu: false, name: "ADIPISCING" },
    {
      menu: true,
      name: "ANOTHER SUBMENU",
      submenu: [
        { name: "LOREM DOLOR" },
        { name: "IPSUM ADIPISCING" },
        { name: "TEMPUS MAGNA" },
        { name: "FEUGIAT VEROEROS" }
      ]
    },
    { menu: false, name: "MAXIMUS ERAT" },
    { menu: false, name: "SAPIEN MAURIS" },
    { menu: false, name: "AMET LACINIA" }
  ];

  const socialIcons = [
    "fab fa-twitter",
    "fab fa-facebook-f",
    "fab fa-snapchat-ghost",
    "fab fa-instagram",
    "fab fa-medium-m"
  ];

  const menuIcon = "fas fa-bars";
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
        integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
        crossorigin="anonymous"
      />
      {/* <Article
        articleImg="https://html5up.net/uploads/demos/editorial/images/pic01.jpg"
        articleTitle="Interdum aenean"
        articleText="Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
        button={true}
      /> */}
      {/* <Copyright
        brand="Untitled"
        imagesComp="Unsplash"
        designComp="HTML5 UP"
        urlDesignComp="https://html5up.net/"
      /> */}
      {/* <About
        title="Get in touch"
        text="Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam."
        contacts={contacts}
      /> */}
      {/* <div className="hamburguerMenu">
        <i className={menuIcon} />
      </div> */}

      <Header logo="Editorial by HTML5 UP" socialIcons={socialIcons} />
      {/* <Hero
        heroTitle="Hi, I’m Editorial by HTML5 UP"
        heroImage="https://html5up.net/uploads/demos/editorial/images/pic10.jpg"
        heroSubTitle="A FREE AND FULLY RESPONSIVE SITE TEMPLATE"
        heroText="Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam."
      /> */}
      {/* <Menu title="Menu" items={items} /> */}
    </div>
  );
}

export default App;
