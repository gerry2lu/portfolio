import React, { useState, useEffect, useRef } from "react";

const TypingEffect = () => {
  const [typedText, setTypedText] = useState("");
  const indexRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const text =
      "I-'m an aspiring founder, product leader, and technical generalist";

    intervalRef.current = setInterval(() => {
      if (indexRef.current < text.length) {
        setTypedText((prev) => prev + text.charAt(indexRef.current));
        indexRef.current++;
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    }, 50);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return <p className="text-xl lg:text-xl mb-8 font-light h-8">{typedText}</p>;
};

export default TypingEffect;
