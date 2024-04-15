import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { MdCancelPresentation } from "react-icons/md";

const Header = () => {
  const [viewdrop, setviewdrop] = useState(false);
  const [listnav, setlistnav] = useState(false);
  const [toggle, settoggle] = useState(false);

  const shownavlink = () => {
    setlistnav(!listnav);
    settoggle(!toggle);
  };
  return (
    <>
      <div className="header-main-div">
        <div>
          <h1>TradeX</h1>
        </div>

        <div className="nav-link-div">
          <a href="" className="nav-link">
            Home
          </a>
          <a href="" className="nav-link">
            About Us
          </a>
          <a
            href=""
            className="nav-link"
            onMouseEnter={() => setviewdrop(true)}
            onMouseLeave={() => setviewdrop(false)}
          >
            Service
            {viewdrop && (
              <div className="droplink">
                <a href="" className="drop-nav-link">
                  drop 1
                </a>
                <a href="" className="drop-nav-link">
                  drop 2
                </a>
              </div>
            )}
          </a>
          <a href="" className="nav-link">
            Careers
          </a>
          <a href="" className="nav-link">
            Blogs
          </a>
          <a href="" className="nav-link">
            Contact Us
          </a>
        </div>

        <div className="toggle-btn" onClick={shownavlink}>
          {toggle ? <MdCancelPresentation /> : <VscThreeBars />}{" "}
        </div>
      </div>
      {listnav && (
        <div className="nav-link-div-list">
          <a href="" className="nav-link-list">
            Home
          </a>
          <a href="" className="nav-link-list">
            About Us
          </a>
          <a
            href=""
            className="nav-link-list"
            onMouseEnter={() => setviewdrop(true)}
            onMouseLeave={() => setviewdrop(false)}
          >
            Service
            {viewdrop && (
              <div className="droplink-list">
                <a href="" className="drop-nav-link">
                  drop 1
                </a>
                <a href="" className="drop-nav-link">
                  drop 2
                </a>
              </div>
            )}
          </a>
          <a href="" className="nav-link-list">
            Careers
          </a>
          <a href="" className="nav-link-list">
            Blogs
          </a>
          <a href="" className="nav-link-list">
            Contact Us
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
