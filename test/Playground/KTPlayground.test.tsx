/**
 * @jest-environment jsdom
 */

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import KTPlayground from '../../src';
import React from 'react';

afterEach(() => {
  cleanup();
});

describe('KTPlayground Component', () => {
  test('Code Rendering', () => {
    const { container } = render(<KTPlayground>test</KTPlayground>);
    const code = container.querySelector('div');
    expect(code).toHaveTextContent('test');
  });

  test('Code rendering with props', () => {
    const { container } = render(
      <KTPlayground
        code={`
      fun main() {
        println("test");
      }
    `}
      />,
    );
    const code = container.querySelector('div');
    expect(code).toHaveTextContent('println("test");');
  });

  test('Setting code and children throws', () => {
    expect(() =>
      render(<KTPlayground code={`test`}>Test</KTPlayground>),
    ).toThrow(Error);
  });
});
