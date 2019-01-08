import { Link as GatsbyLink } from "gatsby";
import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Cite from "../components/Cite";
import Layout from "../components/Layout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import BulletedList from "../components/BulletedList";

import "../app.css";
import "./index.css";

const Pages = () => (
  <Layout>
    <Helmet>
      <title>{`Iconography`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Iconography`}</Title>
    <Paragraph>{`When using iconography you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`choose a flat graphic style`}</ListItem>
      <ListItem>
        {`use the `}
        <GatsbyLink
          className="Link"
          to="/colour/#brand-colours"
        >{`brand colours`}</GatsbyLink>
      </ListItem>
      <ListItem>{`avoid relying on icons to convey important information`}</ListItem>
    </BulletedList>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/226">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
  </Layout>
);

export default Pages;