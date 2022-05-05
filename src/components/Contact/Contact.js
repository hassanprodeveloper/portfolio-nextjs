import React, { useMemo, useState } from "react";

import {
  ButtonBack,
  ButtonFront,
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  Title,
} from "../../styles/GlobalComponents";

import { submitContactMessage } from "../../firebase/firestore/contact";

import {
  WrapperGrid,
  Input,
  Textarea,
  Form,
  SubmittedMessageText,
} from "./ContactStyles";

const defaultMessage = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(null);
  const [message, setMessage] = useState(defaultMessage);

  const handleSetMessage = (element) => {
    let key = element.target.name;
    let value = element.target.value;

    setMessage((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    if (message.name && message.email && message.message)
      try {
        setSubmitting(true);
        const submitted = await submitContactMessage(message);

        if (submitted) {
          setMessage(defaultMessage);

          setSubmittedMessage({
            type: "success",
            text: "Thanks for getting in touch, I will get back to you soon.",
          });
        } else {
          setSubmittedMessage({
            type: "error",
            text: "Something went wrong, better try again with another email",
          });
        }

        setSubmitting(false);
      } catch (error) {
        setSubmittedMessage({
          type: "error",
          text: "Something went wrong, check your internet and try again. ",
        });

        setSubmitting(false);
      }
  };

  useMemo(() => {
    if (!!submittedMessage) {
      setTimeout(() => {
        setSubmittedMessage(null);
      }, 2000);
    }
  }, [submittedMessage]);

  return (
    <Section id="contact">
      <SectionTitle>Get In Touch </SectionTitle>
      <SectionText>
        Feel free to ask anything you want, if you have any queries or want to
        discuss your project then you can contact me.
      </SectionText>
      <Form>
        <WrapperGrid>
          <Title>Name</Title>
          <Input
            type="text"
            disabled={submitting}
            name="name"
            value={message.name}
            onChange={handleSetMessage}
          />
        </WrapperGrid>

        <WrapperGrid>
          <Title>Email</Title>
          <Input
            type="email"
            disabled={submitting}
            name="email"
            value={message.email}
            onChange={handleSetMessage}
          />
        </WrapperGrid>

        <WrapperGrid full>
          <Title>Message</Title>
          <Textarea
            disabled={submitting}
            name="message"
            rows="5"
            value={message.message}
            onChange={handleSetMessage}
          />
        </WrapperGrid>

        {!!submittedMessage && (
          <WrapperGrid full>
            <SubmittedMessageText type={submittedMessage.type}>
              {submittedMessage.text}
            </SubmittedMessageText>
          </WrapperGrid>
        )}

        <WrapperGrid full>
          <ButtonBack disabled={submitting}>
            {submitting ? "Loading..." : "Submit"}
            <ButtonFront
              type="button"
              disabled={submitting}
              onClick={handleSubmit}
            >
              {submitting ? "Loading..." : "Submit"}
            </ButtonFront>
          </ButtonBack>
        </WrapperGrid>
      </Form>
      <SectionDivider />
    </Section>
  );
};

export default Contact;
