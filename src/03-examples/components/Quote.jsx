import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ status, species, image, name }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({width, height})
  }, [name]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p className="mb-1"> {status}</p>
        <p className="mb-3"> {species}</p>
        <img className="mb-4" width={100} height={100} src={image} />
        <footer ref={pRef} className="blockquote-footer">
          {name}
        </footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
