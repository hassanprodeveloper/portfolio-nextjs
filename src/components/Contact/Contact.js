import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
  Title,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";

import { WrapperGrid, Input, Textarea, Form } from "./ContactStyles";

const Contact = () => (
  <Section>
    <SectionTitle>Get In Touch </SectionTitle>
    <Form>
      <WrapperGrid>
        <Title>Name</Title>
        <Input type="text" name="name" />
      </WrapperGrid>

      <WrapperGrid>
        <Title>Email</Title>
        <Input type="email" name="email" />
      </WrapperGrid>

      <WrapperGrid full>
        <Title>Message</Title>
        <Textarea name="message" rows="5"></Textarea>
      </WrapperGrid>

      <WrapperGrid full>
        <Button>Submit</Button>
      </WrapperGrid>
    </Form>
    <SectionDivider />
  </Section>
);

export default Contact;
