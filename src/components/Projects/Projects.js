import React from "react"

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles"
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents"
import { projects } from "../../constants/constants"

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Top Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />

            <HeaderThree title={p.title}>{p.title}</HeaderThree>
            <Hr />

            <CardInfo className="card-info">{p.description}</CardInfo>
            <div style={{ margin: "0 0 50px" }}>
              <TitleContent>Tech Stack</TitleContent>
              <Hr />
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>
                })}
              </TagList>
            </div>
            {/* <UtilityList>
              <ExternalLinks href={p.visit}>Live Preview</ExternalLinks>
              <ExternalLinks href={p.source}>Source Code</ExternalLinks>
            </UtilityList> */}
          </BlogCard>
        )
      })}
    </GridContainer>
  </Section>
)

export default Projects
