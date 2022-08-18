import React, { useState } from "react";
import { ConnectWalletButton } from "./connectWalletButton";
import { Box, Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledMobileMenu = styled(Box)(({ theme }) => ({
  background: "#171a40",
  padding: "20px",
  height: "100%",
}));

function Header() {
  const [mobileState, setMobileState] = useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setMobileState(open);
    };
  const list = () => (
    <StyledMobileMenu
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <ul className="menu-btns">
        <li>
          <a
            href="/"
            className="btn btn-rg btn-auto btn-outline btn-grad on-bg-theme btn-round"
          >
            <span>Whitepaper</span>
          </a>
        </li>
        <li>
          <a
            href="/"
            data-toggle="modal"
            data-target="#login-popup"
            className="btn btn-rg btn-auto btn-outline btn-grad on-bg-theme btn-round"
          >
            <span>Try App</span>
          </a>
        </li>
        <li>
          <ConnectWalletButton />
        </li>
      </ul>
    </StyledMobileMenu>
  );
  return (
    <header
      className="nk-header page-header is-transparent is-sticky is-shrink is-dark"
      id="header"
    >
      <div className="header-main">
        <div className="header-container container">
          <div className="header-wrap">
            <div className="header-logo logo">
              <a href="./" className="logo-link">
                <img
                  className="logo-dark"
                  src="./images/logo.png"
                  srcSet="./images/logo2x.png 2x"
                  alt="logo"
                />
                <img
                  className="logo-light"
                  src="./images/logo-white.png"
                  srcSet="./images/logo-white2x.png 2x"
                  alt="logo"
                />
              </a>
            </div>
            <div className="header-nav-toggle">
              <a
                href="/"
                className="navbar-toggle"
                data-menu-toggle="example-menu-04"
                onClick={toggleDrawer(true)}
              >
                <div className="toggle-line">
                  <span></span>
                </div>
              </a>
            </div>
            <Drawer open={mobileState} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
            <div className="header-navbar header-navbar-s1">
              <nav className="header-menu" id="example-menu-04">
                <ul className="menu-btns">
                  <li>
                    <a
                      href="/"
                      className="btn btn-rg btn-auto btn-outline btn-grad on-bg-theme btn-round"
                    >
                      <span>Whitepaper</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      data-toggle="modal"
                      data-target="#login-popup"
                      className="btn btn-rg btn-auto btn-outline btn-grad on-bg-theme btn-round"
                    >
                      <span>Try App</span>
                    </a>
                  </li>
                  <li>
                    <ConnectWalletButton />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="header-banner bg-theme-dark">
        <div className="nk-banner">
          <div className="banner banner-mask-fix banner-fs banner-single tc-light">
            <div className="banner-wrap">
              <div className="container">
                <div className="row align-items-center justify-content-center gutter-vr-30px">
                  <div className="col-lg-5 col-sm-6 col-md-6 col-mb-6 order-lg-last">
                    <div
                      className="banner-gfx text-center"
                      data-animate="fadeInUp"
                      data-delay="1.4"
                    >
                      <img src="./images/header/gfx-h.png" alt="header" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="banner-caption wide-auto text-center text-lg-left">
                      <div className="cpn-head mt-0">
                        <h1 className="title title-xl-2 title-semibold">
                          For those who value their privacy like we do
                        </h1>
                      </div>
                      <div className="cpn-text cpn-text-s1">
                        <p className="lead">
                          We made this for ourselves. We are sharing it with
                          you!
                        </p>
                      </div>
                      <div className="cpn-btns">
                        <ul className="btn-grp">
                          <li>
                            <a
                              href="/"
                              className="btn btn-md btn-grad btn-round"
                            >
                              Sign up to join
                            </a>
                          </li>
                          <li>
                            <a
                              href="#mint"
                              className="btn btn-md btn-grad btn-grad-alternet btn-round"
                            >
                              Token Distribution
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="cpn-social">
                        <ul className="social">
                          <li>
                            <a href="/">
                              <em className="social-icon fab fa-facebook-f"></em>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <em className="social-icon fab fa-twitter"></em>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <em className="social-icon fab fa-youtube"></em>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <em className="social-icon fab fa-github"></em>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <em className="social-icon fab fa-bitcoin"></em>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <em className="social-icon fab fa-medium-m"></em>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nk-ovm mask-c-dark shape-v mask-contain-bottom"></div>

        <div
          id="particles-bg"
          className="particles-container particles-bg"
          data-pt-base="#00c0fa"
          data-pt-base-op=".3"
          data-pt-line="#2b56f5"
          data-pt-line-op=".5"
          data-pt-shape="#00c0fa"
          data-pt-shape-op=".2"
        ></div>
      </div>
    </header>
  );
}

export default Header;
