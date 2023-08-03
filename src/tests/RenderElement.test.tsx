import React from 'react';
import { render } from '@testing-library/react';
import RenderElement from '../components/RenderElement';
import { Element, ElementType } from './../types';

test('renders paragraph element with correct text and styles', () => {
  const element: Element = {
    type: ElementType.P,
    text: 'Test Paragraph',
    bold: true,
  };

  const { getByText } = render(<RenderElement element={element} />);
  const paragraphElement = getByText('Test Paragraph');

  expect(paragraphElement).toBeInTheDocument();
  expect(paragraphElement.style.fontWeight).toBe('bold');
});
