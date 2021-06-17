import { AiFillGithub, AiFillHtml5, AiFillCloud } from "react-icons/ai";
import { DiCss3, DiSass, DiRuby } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import { SiJavascript, SiRails } from "react-icons/si";
import { GrReactjs, GrMysql, GrHeroku } from "react-icons/gr";


export const frontEnd = [
  {
    id: 1,
    title: "HTML",
    image: AiFillHtml5,
    color: "#E44D26",
  },
  {
    id: 2,
    title: "CSS",
    image: DiCss3,
    color: "#30ACF4",
  },
  {
    id: 3,
    title: "SASS",
    image: DiSass,
    color: "#cd6799",
  },
  {
    id: 4,
    title: "Bootstrap",
    image: BsBootstrapFill,
    color: "#563d7c",
  },
  {
    id: 5,
    title: "JavaScript",
    image: SiJavascript,
    color: "#f0db4f",
  },
  {
    id: 6,
    title: "React",
    image: GrReactjs,
    color: "#00d8ff",
  },
];

export const backEnd = [
  {
    id: 7,
    title: "Ruby",
    image: DiRuby,
    color: "#a91401",
  },
  {
    id: 8,
    title: "Ruby on Rails",
    image: SiRails,
    color: "#d51f06",
  },
  {
    id: 9,
    title: "REST APIs",
    image: AiFillCloud,
    color: "#0096D6",
  },
];

export const others = [
  {
    id: 10,
    title: "Git",
    image: AiFillGithub,
    color: "#24292E",
  },
  {
    id: 11,
    title: "MySQL",
    image: GrMysql,
    color: "#00618A",
  },
  {
    id: 12,
    title: "Heroku",
    image: GrHeroku,
    color: "#430098",
  },
];
