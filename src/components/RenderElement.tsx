import React from "react";
import { Element, ElementType } from "./../types";
import Mention from "./Mention";
import { rgbToHex } from "./../utils";

const RenderElement = ({
    element,
    parent,
    clauseNumber,
  }: {
    element: Element;
    parent?: Element;
    clauseNumber?: number;
  }) => {
    const { type, children, text, bold, underline } = element;
    const { color } = parent || {};
  
    let content;
    let nextClauseNumber = clauseNumber;
  
    if (text) {
      const baseStyles = {
        fontWeight: bold ? "bold" : "normal",
        textDecoration: underline ? "underline" : "none",
      };
      const colorStyle = color ? { borderRadius: 4, padding: 1, color: "#FFFF", backgroundColor: rgbToHex(color) } : {};
      const styles = { ...baseStyles, ...colorStyle };
  
      // fix encoding
      const correctedText = text
      .replace(/â€œ/g, '"')
      .replace(/â€/g, '"')
      .replace(/â€™/g, "'");;
  
      if (text.includes("\n")) {
        const splitText = text.split("\n");
        content = splitText.map((text, index) => (
          <React.Fragment key={index}>
            {index > 0 && <br />}
            <span style={styles}>{text}</span>
          </React.Fragment>
        ));
      } else 
        content = <span style={styles}>{correctedText}</span>;
    }
  
    if (type === ElementType.MENTION && color) {
      return <Mention element={element} />;
    }
  
    if (children) {
      content = children.map((child, index) => {
        if (child.type === ElementType.CLAUSE) {
          nextClauseNumber = (nextClauseNumber || 0) + 1;
  
        }
        return (
          <RenderElement
            key={index}
            element={child}
            parent={element}
            clauseNumber={nextClauseNumber}
          />
        );
      });
    }
  
    switch (type) {
      case ElementType.H1:
        return <h1>{content}</h1>;
      case ElementType.H4:
        return <h4>{content}</h4>;
      case ElementType.P:
        if (parent?.type == ElementType.P)
          return <>{content}</>;
        else
          return <p>{content}</p>;
      case ElementType.LI:
        return <li>{content}</li>;
      case ElementType.BLOCK:
          return <div>{content}</div>;
      default:
        return <>{content}</>;
    }
  };

  export default RenderElement;