import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextBox from './TextBox';

test('TextBox changes contentEditable when blurred', () => {
    // Render the TextBox component with some dummy props
    const { getByText } = render(<TextBox text="Test content" key={0} />);

    const textbox = getByText('Test content');

    // Initially, TextBox should be editable
    expect(textbox).toHaveAttribute('contentEditable', 'true');

    // Simulate a blur event
    fireEvent.blur(textbox);

    // After blurring, TextBox should not be editable
    expect(textbox).toHaveAttribute('contentEditable', 'false');
});