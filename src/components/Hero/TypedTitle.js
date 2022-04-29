import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TextTypingComponent = (props) => {
  const { strings = [] } = props;

  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed: 110,
      backSpeed: 110,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return <span style={{ whiteSpace: "pre" }} ref={el} />;
};

export default TextTypingComponent;
