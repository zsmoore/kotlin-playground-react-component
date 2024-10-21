export interface KTPlaygroundProps {
  /**
   * Show expander if height more than value
   */
  shorterHeight?: number;

  /**
   * How many spaces a block should be indented. Default 4
   */
  indent?: number;

  /**
   * Read only mode with highlighting
   */
  highlightOnly?: boolean;

  /**
   * Create a part of code, starting line number
   */
  from?: number;

  /**
   * Create a part of code, ending line number
   */
  to?: number;

  /**
   * Editor theme
   * - darcula
   * - idea
   * - default
   */
  theme?: 'darcula' | 'idea' | 'default';

  /**
   * Language style
   * Only Kotlin is runnable
   * - Kotlin
   * - JS
   * - Java
   * - Groovy
   * - XML
   * - C
   * - Shell
   * - Swift
   * - Obj-C
   *
   * Default: Kotlin
   */
  mode?:
    | 'kotlin'
    | 'js'
    | 'java'
    | 'groovy'
    | 'xml'
    | 'c'
    | 'shell'
    | 'swift'
    | 'obj-c';

  /**
   * Whether brackets are matched when cursor hovers over bracket
   *
   * Default: False
   */
  matchBrackets?: boolean;

  /**
   * Iframe height in px.  Use for target platform 'canvas'
   */
  outputHeight?: number;

  /**
   * Get completion on every key press.
   * If false ctrl+space for auto completion
   *
   * Default: False
   */
  autoComplete?: boolean;

  /**
   * Errors and warnings check for each change in editor
   *
   * Default: False
   */
  onFlyHighlight?: boolean;

  /**
   * Target platform
   *
   * - Java
   * - Junit
   * - JS
   * - JS-IR
   * - Wasm
   * - Canvas
   *
   * Default: Java
   */
  platform?: 'java' | 'junit' | 'js' | 'js-ir' | 'wasm' | 'canvas';

  /**
   * Whether the code snippet starts unexpanded
   *
   * Default: False
   */
  foldedButton?: boolean;

  /**
   * List of arguments to pass for execution
   */
  arguments?: string[];

  /**
   * Whether to show line numbers to the left of the editor
   *
   * Default: False
   */
  lines?: boolean;

  /**
   * Whether to use the context-sensitive indentation
   *
   * Default: False
   */
  autoIndent?: boolean;

  /**
   * Show link for open in playground
   *
   * Default: enabled
   */
  crosslink?: 'enabled' | 'disabled';

  /**
   * Scrollbar stype
   *
   * Defaults: Native
   */
  scrollbarString?: 'native' | 'null';

  /**
   * Function to be called each time code changes.
   * Provides the current playground code
   *
   * Debounce time is .5s
   */
  onChange?: (code: string) => void;

  /**
   * Function called after all tests passed.
   * Only applicable if target platform is junit
   */
  onTestPassed?: () => void;

  /**
   * Function called after all tests failed.
   * Only applicable if target platform is junit
   */
  onTestFailed?: () => void;

  /**
   * Function called after the console is closed
   */
  onCloseConsole?: () => void;

  /**
   * Function called after the console is opened
   */
  onOpenConsole?: () => void;

  /**
   * Optional custom server to send code to
   */
  server?: string;

  /**
   * Optionally pass in code via string instead of children to avoid escaping characters
   */
  code?: string;
}
