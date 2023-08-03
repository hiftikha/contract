This project provides a system for rendering rich text documents with support for various text elements, including headings, paragraphs, lists, and special mentions with colored backgrounds.

## Components

### Mention
The Mention component is responsible for rendering mentions, which are pieces of replaceable text that behave like programming variables. Mentions are identified by their id attribute, and they may have a specific background color.


### RenderElement
The RenderElement component is a recursive component that handles the rendering of different types of elements, including headings, paragraphs, lists, blocks, and mentions. It also handles the styling of text, including bold, underline, and coloration.


## Features

- Rich Text Rendering: Supports various text elements, such as headings, paragraphs, and lists.
- Mentions: Enables colored background mentions that can act as variables within the text.
- Text Styling: Supports bold, underline, and color styling.
- Clause Numbering: Keeps track of clause elements to facilitate numbered lists.
- Encoding Fix: Automatically corrects specific character encoding issues.

## Testing

Tests are written using Jest and React Testing Library. You can run the tests by executing the following command:


```npm test```

## Future Work

Mention Synchronization: Implement a system to link mentions by their id attribute, so changing the value of one mention updates all instances of that mention throughout the document.