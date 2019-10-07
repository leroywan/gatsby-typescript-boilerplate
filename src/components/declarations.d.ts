type CSSClassName = string;

declare module '*.scss' {
  const content: {[className: string]: CSSClassName};
  export = content;
}
