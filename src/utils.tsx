import { Element, ElementType } from "./types";

export const rgbToHex = (rgb: string) => {
    const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (match) {
      return "#" + match.slice(1, 4).map(Number).map(n => n.toString(16).padStart(2, '0')).join('');
    }
    return rgb; // Return the original string if it's not in RGB format
  };

export function parseElement(input: any): Element {
    return {
      title: input.title,
      type: ElementType[input.type as keyof typeof ElementType] || input.type,
      children: input.children ? input.children.map(parseElement) : undefined,
      text: input.text,
      bold: input.bold,
      underline: input.underline,
      color: input.color,
      id: input.id,
      value: input.value,
      variableType: input.variableType,
    };
  }