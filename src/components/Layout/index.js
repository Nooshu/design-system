import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import Search from "../Search";
import Menu from "../Menu";

import favicon from "./favicon.ico";

import "./index.css";

const Layout = ({ children, footer }) => (
  <div className="Layout">
    <Helmet titleTemplate="%s - Barnardo's">
      <html lang="en" />
      <link rel="shortcut icon" type="image/x-icon" href={favicon} />
    </Helmet>
    <Header
      search={<Search />}
      menu={
        <Menu
          items={[
            {
              text: "About us",
              to: "/",
              items: [
                {
                  text: "Our history",
                  to: "/"
                },
                {
                  text: "Annual report",
                  to: "/"
                }
              ]
            },
            {
              text: "What we do",
              to: "/"
            },
            {
              text: "Work with us",
              to: "/"
            }
          ]}
        />
      }
    />
    <Main>{children}</Main>
    <Footer>{footer}</Footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.node
};

export default Layout;
