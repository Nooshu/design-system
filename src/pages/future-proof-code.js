import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import Cite from "../components/Cite";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Pagination from "../components/Pagination";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Topic from "../components/Topic";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Future-proof code`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Topic>{`Development standards`}</Topic>
    <Title>{`Future-proof code`}</Title>
    <Paragraph>{`You should transpile modern standards for:`}</Paragraph>
    <BulletedList>
      <ListItem>
        {`JavaScript with `}
        <Link href="https://babeljs.io/docs/en/babel-preset-env">{`babel-preset-env`}</Link>
      </ListItem>
      <ListItem>
        {`CSS with `}
        <Link href="https://preset-env.cssdb.org/">{`postcss-preset-env`}</Link>
      </ListItem>
    </BulletedList>
    <Paragraph>
      {`You should use the `}
      <Link href="https://github.com/browserslist/browserslist">{`browserslist`}</Link>
      {` defaults to configure both.`}
    </Paragraph>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/183">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Pagination
      previous={{
        to: "/code-quality",
        label: "Code quality"
      }}
    />
  </DesignSystemLayout>
);

export default Page;
