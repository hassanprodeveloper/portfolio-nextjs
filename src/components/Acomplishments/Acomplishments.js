import React from "react"

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents"
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles"

const data = [
  { number: 2, text: "Android App on PlayStore" },
  { number: 2, text: "IOS App on Apple Store" },
  { number: 6, text: "Web Applications" },
  { number: 2000, text: "Git Contributions" },
]

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number.toLocaleString("en-IN")}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
)

export default Acomplishments
