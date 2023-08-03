export enum ElementType {
    H1 = 'h1',
    H4 = 'h4',
    P = 'p',
    UL = 'ul',
    LI = 'li',
    MENTION = 'mention',
    LIC = 'lic',
    CLAUSE = 'clause',
    BLOCK = 'block',
}

export type Element = {
    title?: string;
    type: ElementType;
    children?: Element[];
    text?: string;
    bold?: boolean;
    underline?: boolean;
    color?: string;
    id?: string;
    value?: string;
    variableType?: string;
};