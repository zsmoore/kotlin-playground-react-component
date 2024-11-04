[![NPM version](https://img.shields.io/npm/v/kotlin-playground-react-component.svg)](https://www.npmjs.com/package/kotlin-playground-react-component)
# kotlin-playground-react-component

React wrapper around [Kotlin Playground](https://github.com/JetBrains/kotlin-playground).  

Simple example  
```jsx
import KTPlayground from 'kotlin-playground-react-component';

<KTPlayground>
fun example() {
  println("test")
]
</KTPlayground>
```

If you prefer to use string templates alternatively pass in as props to avoid escaping code
```jsx
import KTPlayground from 'kotlin-playground-react-component';

<KTPlayground code={`
fun example() {
  println("test")
}
`} />
```

## Using in MDX
The primary motivation for building this wrapper was for use in [MDX](https://mdxjs.com/).  
Specifically [Docusaurus](https://docusaurus.io/) which allows us to easily write docs in markdown while embedding react components without bootstrapping an entire react app.  

In order to do so we need to pull in this library in addition to the rehype plugin [rehype-spaced](https://github.com/zsmoore/rehype-spaced).

In our Docusaurus config we add the rehype plugin
```js
import spaced from 'rehype-spaced';
...
docs: {
  ...
  rehypePlugins: [spaced],
...
```
See [Docusaurus docs](https://docusaurus.io/docs/markdown-features/plugins) for more information on configuring plugins.  

Once we have the plugin configured we can add Kotlin Playground to our markdown as follows.
````jsx
Here is some markdown

<KTPlayground>
```spaced
fun example() {
 println("test")
}
```
</KTPlayground>

Here is some more markdown
````
Our plugin will preserve newlines and tabbing in the markdown context.

### Example output
````jsx
<KTPlayground theme={"darcula"}>
```spaced
fun abc() {
  println("abc");
}

fun main() {
  abc()
}
```
</KTPlayground>
````
<img width="806" alt="Screenshot 2024-10-20 at 11 06 42 PM" src="https://github.com/user-attachments/assets/37aefaf3-837b-4150-8e04-386d717f6b31">


## Prop Types
All available configurations are usable via props.

An example of setting the editor to have dark theme looks as follows
```jsx
<KTPlayground theme='darcula'>test</KTPlayground>
```

See documentation at the [Kotlin Playground README](https://github.com/JetBrains/kotlin-playground/blob/master/README.md#customizing-editors) for additional docs.  
```typescript
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
```
