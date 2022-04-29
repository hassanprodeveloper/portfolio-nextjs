import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  SectionTitleDescription,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import TextTypingComponent from "./TypedTitle";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Muhammad  Hassan
        </SectionTitle>

        <SectionText>
          Hey there, This is Muhammad Hassan. I am professional Web & Mobile
          hybrid application developer.
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/files/resume.pdf";
          }}
           target='_blank'
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
