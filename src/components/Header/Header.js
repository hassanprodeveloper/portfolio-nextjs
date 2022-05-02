import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";
import { socialAccounts } from "../../constants/urls";

const navLinks = [
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <img src="/logo.svg" height={40} width={40} />
        </a>
      </Link>
    </Div1>
    <Div2>
      {navLinks.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>
            <NavLink>{item.title}</NavLink>
          </Link>
        </li>
      ))}
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href={socialAccounts.github}>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href={socialAccounts.linkedin}>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href={socialAccounts.instagram}>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
