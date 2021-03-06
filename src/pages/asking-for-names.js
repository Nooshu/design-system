import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import BulletedList from "../components/BulletedList";
import Cite from "../components/Cite";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Figure from "../components/Figure";
import Figures from "../components/Figures";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import TextInput from "../components/TextInput";
import Title from "../components/Title";
import Topic from "../components/Topic";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Asking for names`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Topic>{`Patterns`}</Topic>
    <Title>{`Asking for names`}</Title>
    <Paragraph>{`You should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`only ask for names when absolutely needed`}</ListItem>
      <ListItem>{`support all characters users may need to enter`}</ListItem>
      <ListItem>{`avoid asking for title`}</ListItem>
    </BulletedList>
    <Figures>
      <Figure caption="Where possible use a single name field to accommodates the broadest range of name types.">
        <TextInput
          id="text-input-full-name-example"
          label="Full name"
          size={48}
        />
      </Figure>
      <Figure caption="If your product needs to reliably extract first name and last name, use multiple name fields.">
        <TextInput
          id="text-input-first-name-example"
          label="First name"
          size={48}
        />

        <TextInput
          id="text-input-last-name-example"
          label="Last name"
          size={48}
        />
      </Figure>
    </Figures>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/404">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
  </DesignSystemLayout>
);

export default Page;
