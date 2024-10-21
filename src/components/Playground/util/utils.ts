import { KTPlaygroundProps } from '../Props';

const propToAttr = new Map<string, string>([
  ['shorterHeight', 'data-shorter-height'],
  ['indent', 'indent'],
  ['highlightOnly', 'data-highlight-only'],
  ['from', 'from'],
  ['to', 'to'],
  ['theme', 'theme'],
  ['mode', 'mode'],
  ['matchBrackets', 'match-brackets'],
  ['outputHeight', 'data-output-height'],
  ['autoComplete', 'data-autocomplete'],
  ['onFlyHighlight', 'highlight-on-fly'],
  ['platform', 'data-target-platform'],
  ['foldedButton', 'folded-button'],
  ['arguments', 'args'],
  ['lines', 'lines'],
  ['autoIndent', 'auto-indent'],
  ['crosslink', 'data-crosslink'],
  ['scrollbarString', 'data-scrollbar-style'],
]);

export type PlaygroundOptions = Pick<
  KTPlaygroundProps,
  | 'onChange'
  | 'onTestPassed'
  | 'onTestFailed'
  | 'onCloseConsole'
  | 'onOpenConsole'
  | 'server'
>;

export function convertPropsToAttrs(
  props: KTPlaygroundProps,
): Map<string, unknown> {
  const attributes = new Map<string, unknown>();
  for (const entry of propToAttr.entries()) {
    const safeKey = entry[0] as keyof KTPlaygroundProps;
    if (props[safeKey]) {
      attributes.set(entry[1], props[safeKey]);
    }
  }
  return attributes;
}

export function getPlaygroundOptions(
  props: KTPlaygroundProps,
): PlaygroundOptions {
  return {
    onChange: props.onChange,
    onTestPassed: props.onTestPassed,
    onTestFailed: props.onTestFailed,
    onCloseConsole: props.onCloseConsole,
    onOpenConsole: props.onOpenConsole,
    server: props.server,
  };
}
