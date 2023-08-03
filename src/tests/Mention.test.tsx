import React from 'react';
import { render } from '@testing-library/react';
import Mention from '../components/Mention';
import { Element, ElementType } from './../types'; 

test('renders Mention with correct text and background color', () => {
  const element: Element = {
    id: 'test-id',
    color: 'rgb(255, 0, 0)',
    text: 'Test Mention',
    type: ElementType.MENTION,
  };

  const { getByText } = render(<Mention element={element} />);
  const mentionElement = getByText('Test Mention');

  expect(mentionElement).toBeInTheDocument();
  expect(mentionElement.style.backgroundColor).toBe('rgb(255, 0, 0)');
});
