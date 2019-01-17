import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import Cite from "../components/Cite";
import DesignSystemIndex from "../components/DesignSystemIndex";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Figure from "../components/Figure";
import Figures from "../components/Figures";
import Heading from "../components/Heading";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Pagination from "../components/Pagination";
import Paragraph from "../components/Paragraph";
import Submit from "../components/Submit";
import Swatches from "../components/Swatches";
import TextInput from "../components/TextInput/index";
import Title from "../components/Title";
import Topic from "../components/Topic";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Colour`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Topic>{`Design standards`}</Topic>
    <Title>{`Colour`}</Title>
    <DesignSystemIndex
      items={[
        {
          level: 1,
          text: "Brand colours",
          to: "/colour/#brand-colours"
        },
        {
          level: 1,
          text: "Using colours",
          to: "/colour/#using-colours"
        }
      ]}
    />
    <Paragraph>{`To apply colour you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`only use the brand colours`}</ListItem>
      <ListItem>{`add white (tint) or black (shade) in 10% increments`}</ListItem>
    </BulletedList>
    <Heading>{`Brand colours`}</Heading>
    <Swatches
      swatches={[
        [{ label: "Green", hex: "#6aa300", primary: true }],
        [{ label: "Orange", hex: "#e86c00", primary: true }],
        [{ label: "Pink", hex: "#cc0070", primary: true }],
        [{ label: "Purple", hex: "#6e2066", primary: true }],
        [{ label: "Teal", hex: "#0099a9", primary: true }],
        [{ label: "Red", hex: "#c30000", primary: true }],
        [{ label: "Black", hex: "#1d1d1d", primary: true }],
        [
          {
            label: "White",
            hex: "#ffffff",
            bordered: true,
            inverted: true,
            primary: true
          }
        ]
      ]}
    />
    <Heading>{`Using colours`}</Heading>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>
        {`use `}
        <Link href="https://webaim.org/resources/contrastchecker/">{`accessible`}</Link>
        {` colour combinations for text`}
      </ListItem>
      <ListItem>{`use Black for titles and headings`}</ListItem>
      <ListItem>{`avoid tints and shades for backgrounds`}</ListItem>
      <ListItem>{`avoid relying on colour to convey important information`}</ListItem>
    </BulletedList>
    <Paragraph>{`Also consider meaningful use of colour, for example:`}</Paragraph>
    <BulletedList>
      <ListItem>{`greens for positive actions like submit or continue`}</ListItem>
      <ListItem>{`oranges for cautionary actions like load or warn`}</ListItem>
      <ListItem>{`reds for destructive actions like delete or error`}</ListItem>
    </BulletedList>
    <Figures>
      <Figure caption="Black for labels and 30% tint for hint text. Red for errors with 80% tint for inset shadows.">
        <TextInput
          hint="As it appears on your ID."
          id="text-control-full-name-example"
          label="Full name"
          size={48}
          error="Enter your full name"
        />
      </Figure>
      <Figure caption="White text on Green with 10% shade on hover and 40% shade for drop shadows.">
        <Submit text="Continue" />
      </Figure>
    </Figures>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/14">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Pagination
      next={{
        to: "/typography",
        label: "Typography"
      }}
    />
  </DesignSystemLayout>
);

export default Page;
