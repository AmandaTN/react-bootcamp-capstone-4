import {
  BiChevronLeft,
  BiChevronRight,
  BiCartAlt,
  BiSearchAlt2,
} from "react-icons/bi";

export const Icon = ({ iconName }) => {
  switch (iconName) {
    case "BiCartAlt":
      return <BiCartAlt />;
    case "BiChevronLeft":
      return <BiChevronLeft />;
    case "BiChevronRight":
      return <BiChevronRight />;
    case 'BiSearchAlt2':
      return <BiSearchAlt2 />
    default:
      return <></>;
  }
};
