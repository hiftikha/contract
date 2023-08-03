import { Element } from "../types";

const Mention = ({ element }: { element: Element }) => {
  const { id, color, text } = element;
  // Use context, Redux, or other state management to link mentions by id
  return <span style={{ backgroundColor: color }}>{text}</span>;
};

export default Mention;
