import { DiReact, DiJsBadge, DiDatabase, DiJavascript1 } from "react-icons/di";
import { SiTypescript, SiFirebase, SiGit } from "react-icons/si";

export const Skills = [
  {
    slug: "javascript",
    Component: DiJsBadge,
    title: "Javascript",
    Description: () => (
      <>
        I am a Javascript Developer, javascript is my first programing language.
      </>
    ),
  },
  {
    slug: "typescript",
    Component: SiTypescript,
    title: "Typescript",
    Description: () => (
      <>
        I have use typescript in multiple projects, as it reduces run time
        errors .
      </>
    ),
  },
  {
    slug: "reactJs",
    Component: DiReact,
    title: "ReactJs",
    Description: () => (
      <>I can Develop Dynamic Web Applications using React Js</>
    ),
  },
  {
    slug: "nextJs",
    Component: DiJavascript1,
    title: "NextJs",
    Description: () => (
      <>
        I have used nextJs in simple & also large websites, I can make api's in
        nextJs.
      </>
    ),
  },
  {
    slug: "reactNative",
    Component: DiReact,
    title: "React Native",
    Description: () => (
      <>I have developed Android & IOS Native Apps using React Native.</>
    ),
  },
  {
    slug: "redux",
    Component: DiDatabase,
    title: "Redux",
    Description: () => (
      <>
        I prefer to use redux to manage application state, & redux-saga as a
        middleware.
      </>
    ),
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => (
      <>
        I have used Firebase for auth, database, hosting & analytics in my apps.
      </>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>Git is a tool that I use every day. I use GitHub for pushing my code.</>
    ),
  },
];
