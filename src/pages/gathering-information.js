import Helmet from "react-helmet";
import React from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import CheckBox from "../components/CheckBox";
import CheckBoxes from "../components/CheckBoxes";
import Cite from "../components/Cite";
import Conditional from "../components/Conditional";
import CurrencyInput from "../components/CurrencyInput";
import DateInput from "../components/DateInput";
import Example from "../components/Example";
import ErrorSummary from "../components/ErrorSummary";
import Heading from "../components/Heading";
import DesignSystemLayout from "../components/DesignSystemLayout";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Paragraph from "../components/Paragraph";
import RadioButtons from "../components/RadioButtons";
import Subheading from "../components/Subheading";
import DesignSystemIndex from "../components/DesignSystemIndex";
import TextArea from "../components/TextArea";
import TextInput from "../components/TextInput";
import Title from "../components/Title";
import BulletedList from "../components/BulletedList";
import Figures from "../components/Figures";
import Figure from "../components/Figure";

const Page = () => (
  <DesignSystemLayout>
    <Helmet>
      <title>{`Gathering information`}</title>
    </Helmet>
    <Breadcrumbs
      items={[
        {
          text: "Home",
          to: "/"
        }
      ]}
    />
    <Title>{`Gathering information`}</Title>
    <DesignSystemIndex
      items={[
        {
          level: 1,
          text: "Text entry",
          to: "/gathering-information/#text-entry"
        },
        {
          level: 2,
          text: "Text Input",
          to: "/gathering-information/#text-input"
        },
        {
          level: 3,
          text: "Gathering names",
          to: "/gathering-information/#gathering-names"
        },
        {
          level: 2,
          text: "Text Area",
          to: "/gathering-information/#text-area"
        },
        {
          level: 2,
          text: "Currency Input",
          to: "/gathering-information/#currency-input"
        },
        {
          level: 2,
          text: "Date Input",
          to: "/gathering-information/#date-input"
        },
        {
          level: 1,
          text: "Choices",
          to: "/gathering-information/#choices"
        },
        {
          level: 2,
          text: "Check Box",
          to: "/gathering-information/#check-box"
        },
        {
          level: 2,
          text: "Check Boxes",
          to: "/gathering-information/#check-boxes"
        },
        {
          level: 2,
          text: "Radio Buttons",
          to: "/gathering-information/#radio-buttons"
        },
        {
          level: 2,
          text: "Conditional",
          to: "/gathering-information/#conditional"
        },
        {
          level: 1,
          text: "Validation",
          to: "/gathering-information/#validation"
        },
        {
          level: 2,
          text: "Error Summary",
          to: "/gathering-information/#error-summary"
        },
        {
          level: 2,
          text: "Errors",
          to: "/gathering-information/#errors"
        },
        {
          level: 2,
          text: "Preventing spam",
          to: "/gathering-information/#preventing-spam"
        }
      ]}
    />
    <Paragraph>{`When gathering information you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`only ask for information which is absolutely needed`}</ListItem>
      <ListItem>{`ask for required information first`}</ListItem>
      <ListItem>{`add '(optional)' to labels of information that isn't required`}</ListItem>
      <ListItem>{`avoid unnecessary words like 'Please' or 'Enter' in labels`}</ListItem>
      <ListItem>{`group related fields together, for example "Email" and "Phone"`}</ListItem>
      <ListItem>{`minimise the number of fields on each page`}</ListItem>
    </BulletedList>
    <Heading>{`Text entry`}</Heading>
    <Paragraph>{`Use the components below for text entry. You should:`}</Paragraph>
    <BulletedList>
      <ListItem>
        {`make the size appropriate to the amount of information requested`}
      </ListItem>
      <ListItem>{`use multiples of 8 for setting the size`}</ListItem>
      <ListItem>{`use hint text rather than placeholder text`}</ListItem>
    </BulletedList>
    <Subheading>{`Text Input`}</Subheading>
    <Example>
      <TextInput
        hint="So that we can send you the certificate."
        id="text-input-email-example"
        label="Email"
        size={48}
      />
    </Example>
    <Example>
      <TextInput
        id="text-input-post-code-example"
        label="Postcode (optional)"
        size={16}
      />
    </Example>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/TextInput">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/65">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Subheading>{`Gathering names`}</Subheading>
    <Paragraph>{`Use this pattern when asking for names. You should:`}</Paragraph>
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
    <Subheading>{`Text Area`}</Subheading>
    <Example>
      <TextArea
        id="text-area-example"
        label="What's on your mind?"
        size={48}
        verticalSize={4}
      />
    </Example>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/TextArea">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/65">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Subheading>{`Currency Input`}</Subheading>
    <Example>
      <CurrencyInput currency="£" id="currency-input-example" label="Amount" />
    </Example>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/CurrencyInput">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/160">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Subheading>{`Date Input`}</Subheading>
    <Paragraph>{`Use this component for date entry. You should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`use it instead of dropdowns`}</ListItem>
      <ListItem>{`allow flexible data entry, for
    example 01 and 1`}</ListItem>
      <ListItem>{`trigger a numeric keyboard when available`}</ListItem>
      <ListItem>{`avoid auto-tabbing between fields`}</ListItem>
      <ListItem>{`avoid using calendar pickers`}</ListItem>
    </BulletedList>
    <Example>
      <DateInput id="date-input-example" legend="Date of birth" />
    </Example>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/DateInput">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/75">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Choices`}</Heading>
    <Paragraph>{`Use the components below for choices. You should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`use them instead of dropdowns`}</ListItem>
      <ListItem>{`limit the options to eight or less`}</ListItem>
    </BulletedList>
    <Subheading>{`Check Box`}</Subheading>
    <Example>
      <CheckBox
        id="check-box-example"
        label="Subscribe to mailing list"
        name="check-box-example"
      />
    </Example>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/CheckBox">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/68">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Subheading>{`Check Boxes`}</Subheading>
    <Paragraph>{`When using this component you should:`}</Paragraph>
    <BulletedList>
      <ListItem>{`provide an option that excludes the others`}</ListItem>
    </BulletedList>
    <Example>
      <CheckBoxes
        items={[
          {
            label: "It won't be",
            id: "check-boxes-example-no-record"
          },
          {
            label: "Tape recorder",
            id: "check-boxes-example-audio"
          },
          {
            label: "Video recorder",
            id: "check-boxes-example-video"
          },
          {
            label: "Hand-written notes",
            id: "check-boxes-example-hand-written-notes"
          }
        ]}
        hint="Letting the participants know is a legal requirement."
        id="check-boxes-example"
        legend="How will the interview be recorded?"
        name="check-boxes-example"
      />
    </Example>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/CheckBoxes">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/68">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Subheading>{`Radio Buttons`}</Subheading>
    <Example>
      <RadioButtons
        items={[
          {
            label: "Yes",
            id: "radio-buttons-example-yes"
          },
          {
            label: "No",
            id: "radio-buttons-example-no"
          },
          {
            label: "Maybe",
            id: "radio-buttons-example-maybe"
          }
        ]}
        id="radio-buttons-example"
        legend="Will there be refreshments?"
        name="radio-buttons-example"
      />
    </Example>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/RadioButtons">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/68">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Subheading>{`Conditional`}</Subheading>
    <Figures>
      <Figure caption="Select an option to reveal">
        <Conditional
          trigger={
            <RadioButtons
              items={[
                {
                  label: "Yes",
                  id: "conditional-inputs-one-of-many-input-example-yes"
                },
                {
                  label: "No",
                  id: "conditional-inputs-one-of-many-input-example-no"
                }
              ]}
              id="conditional-inputs-radio-buttons-example"
              legend="Can we email you?"
              name="conditional-inputs-radio-buttons-example"
            />
          }
          target={
            <TextInput
              id="conditional-input-singleline-text-input-example"
              label="Email"
              size={48}
            />
          }
        />
      </Figure>
    </Figures>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/86">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Heading>{`Validation`}</Heading>
    <Subheading>{`Error Summary`}</Subheading>
    <Example>
      <ErrorSummary
        items={[
          {
            id: "submit-inputs-text-input-example",
            error: "Enter the name of the meal"
          },
          {
            error: "Select whether the meal contains nuts or not"
          }
        ]}
      />
    </Example>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/tree/master/src/components/ErrorSummary">{`code`}</Link>
      {` and `}
      <Link href="https://github.com/barnardos/design-system/issues/67">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
    <Subheading>{`Errors`}</Subheading>
    <Example>
      <TextInput
        id="text-input-validation-example"
        label="Name of the meal"
        size={48}
        error="Enter the name of the meal"
      />
    </Example>
    <Example>
      <RadioButtons
        items={[
          {
            label: "Yes",
            id: "radio-buttons-example-validation-yes"
          },
          {
            label: "No",
            id: "radio-buttons-example-validation-no"
          },
          {
            label: "I'm not sure",
            id: "radio-buttons-example-validation-unsure"
          }
        ]}
        error="Select whether the meal contains nuts or not"
        hint="Nut allergies can be dangerous. Only choose 'No' if you're completely sure"
        id="radio-buttons-example-validation"
        legend="Does the meal include nuts?"
        name="radio-buttons-example-validation"
      />
    </Example>
    <Subheading>{`Preventing spam`}</Subheading>
    <Paragraph>{`To prevent spam submissions when gathering information you could try:`}</Paragraph>
    <BulletedList>
      <ListItem>{`rate and connection limiting`}</ListItem>
      <ListItem>{`using honey pots`}</ListItem>
      <ListItem>{`transaction monitoring`}</ListItem>
    </BulletedList>
    <Paragraph>{`Avoid using CAPTCHAs, as they cause usability an accessibility issues.`}</Paragraph>
    <Cite>
      {`View `}
      <Link href="https://github.com/barnardos/design-system/issues/411">{`research`}</Link>
      {` on GitHub.`}
    </Cite>
  </DesignSystemLayout>
);

export default Page;
