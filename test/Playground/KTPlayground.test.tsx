/**
 * @jest-environment jsdom
 */

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { KTPlayground } from '../../src';
import React from 'react';

afterEach(() => {
  cleanup();
});

describe('KTPlayground Component', () => {
  const { container } = render(<KTPlayground code="test" />);

  test('Code Rendering', () => {
    const code = container.querySelector('code');
    expect(code).toHaveTextContent('test');
  });
});
