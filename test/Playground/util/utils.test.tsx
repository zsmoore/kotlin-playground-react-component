import { KTPlaygroundProps } from '../../../src/components/Playground/Props';
import {
  convertPropsToAttrs,
  getPlaygroundOptions,
  PlaygroundOptions,
} from '../../../src/components/Playground/util/utils';

describe('Playground Utils', () => {
  test('Props are converted to attributes', () => {
    const props: KTPlaygroundProps = {
      highlightOnly: true,
    };

    const attributes: Map<string, unknown> = convertPropsToAttrs(props);
    expect(attributes.get('data-highlight-only')).toEqual(true);
  });

  test('Props with same name stay the same', () => {
    const props: KTPlaygroundProps = {
      theme: 'darcula',
    };

    const attributes: Map<string, unknown> = convertPropsToAttrs(props);
    expect(attributes.get('theme')).toEqual('darcula');
  });

  test('Unset props are not included', () => {
    const props: KTPlaygroundProps = {
      theme: 'darcula',
    };
    const attributes: Map<string, unknown> = convertPropsToAttrs(props);
    expect(attributes.get('theme')).toEqual('darcula');
    expect(attributes.has('data-highlight-only')).toBeFalsy();
  });

  test('Non Attr props are not included', () => {
    const props: KTPlaygroundProps = {
      server: 'myServer',
      onChange: (code) => console.log(code),
    };

    const attributes: Map<string, unknown> = convertPropsToAttrs(props);
    expect(attributes.size).toBe(0);
  });

  test('Get Playground options works', () => {
    const props: KTPlaygroundProps = {
      server: 'myServer',
      onChange: (code) => console.log(code),
    };

    const options: PlaygroundOptions = getPlaygroundOptions(props);
    expect(options.server).toBe('myServer');
    expect(options.onCloseConsole).toBeUndefined();
  });

  test('Bool props that need converted are converted', () => {
    const props: KTPlaygroundProps = {
      lines: true,
    };

    const attributes: Map<string, unknown> = convertPropsToAttrs(props);
    expect(attributes.get('lines')).toBe('true');
  });
});
