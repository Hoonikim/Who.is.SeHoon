'use client';

import React, { useState, useEffect } from 'react';
import styles from '../../styles/using.module.css';

interface TypingProps {
  content: string;
}

const TypingEffect: React.FC<TypingProps> = ({ content }) => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    let i: number = 0;

    const typing = () => {
      if (i < content.length) {
        setText((prevText) => prevText + content.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    };

    const interval = setInterval(typing, 200);

    return () => clearInterval(interval);
  }, [content]);

  return (
    <div className={styles.TextBox}>
      <div>{text}</div>
      <span className={styles.blink}>|</span>
    </div>
  );
};

export default TypingEffect;
