import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import DesignSystemLayout from "../components/DesignSystemLayout";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import SignpostLink from "../components/SignpostLink";
import SignpostLinks from "../components/SignpostLinks";
import Title from "../components/Title";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Getting started`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Getting started`}</Title>
    <Paragraph>
      {`The Design System is for anyone creating digital products at Barnardo's.`}
    </Paragraph>
    <Paragraph>{`It's based on research and solves the common problems so you can focus on your product.`}</Paragraph>
    <Paragraph>{`This provides consistency and familiarity for service users.`}</Paragraph>
    <Paragraph>{`It includes:`}</Paragraph>
    <BulletedList>
      <ListItem>{`principles`}</ListItem>
      <ListItem>{`standards`}</ListItem>
      <ListItem>{`components`}</ListItem>
      <ListItem>{`patterns`}</ListItem>
      <ListItem>{`assets`}</ListItem>
    </BulletedList>
    <Paragraph>{`Try to adopt as much of the Design System as possible. Depending on your needs and constraints, you may not be able to adopt all of it. It's not all or nothing.`}</Paragraph>
    <Paragraph>
      {`If something isn't in the Design System, don't let it stop you. Design a solution, test it and use it in your product. If you think it solves a common problem let the Design System team know.`}
    </Paragraph>
    <SignpostLinks>
      <SignpostLink to="/#principles">{`View our principles`}</SignpostLink>
      <SignpostLink href="https://github.com/barnardos/design-system/">{`Installation guide on GitHub (technical)`}</SignpostLink>
    </SignpostLinks>
  </DesignSystemLayout>
);

export default Page;
