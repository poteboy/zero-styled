import type { ComponentType } from "react";
import {
  ResponsiveStyle,
  StyledProps,
  StyledKeyType,
  PseudoProps,
} from "@kuma-ui/system";

export type StyledComponentProps<T> = T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : T extends ComponentType<infer P>
  ? P
  : never;
/**
 * Kuma UI's `styled` API allows you to create styled React components using tagged template literals. This makes it a familiar and comfortable choice for developers who have worked with libraries like styled-components or Emotion.
 */
function _styled<T extends keyof JSX.IntrinsicElements>(Component: T) {
  const fn = (
    strings: TemplateStringsArray
  ): React.FC<React.ComponentProps<T>> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- FIXME
    throw Error('Using the "styled" tag in runtime is not supported.') as any;
  };
  return fn;
}

const styled = Object.assign(_styled, {
  a: _styled("a"),
  abbr: _styled("abbr"),
  address: _styled("address"),
  area: _styled("area"),
  article: _styled("article"),
  aside: _styled("aside"),
  audio: _styled("audio"),
  b: _styled("b"),
  base: _styled("base"),
  bdi: _styled("bdi"),
  bdo: _styled("bdo"),
  big: _styled("big"),
  blockquote: _styled("blockquote"),
  body: _styled("body"),
  br: _styled("br"),
  button: _styled("button"),
  canvas: _styled("canvas"),
  caption: _styled("caption"),
  center: _styled("center"),
  cite: _styled("cite"),
  code: _styled("code"),
  col: _styled("col"),
  colgroup: _styled("colgroup"),
  data: _styled("data"),
  datalist: _styled("datalist"),
  dd: _styled("dd"),
  del: _styled("del"),
  details: _styled("details"),
  dfn: _styled("dfn"),
  dialog: _styled("dialog"),
  div: _styled("div"),
  dl: _styled("dl"),
  dt: _styled("dt"),
  em: _styled("em"),
  embed: _styled("embed"),
  fieldset: _styled("fieldset"),
  figcaption: _styled("figcaption"),
  figure: _styled("figure"),
  footer: _styled("footer"),
  form: _styled("form"),
  h1: _styled("h1"),
  h2: _styled("h2"),
  h3: _styled("h3"),
  h4: _styled("h4"),
  h5: _styled("h5"),
  h6: _styled("h6"),
  head: _styled("head"),
  header: _styled("header"),
  hgroup: _styled("hgroup"),
  hr: _styled("hr"),
  html: _styled("html"),
  i: _styled("i"),
  iframe: _styled("iframe"),
  img: _styled("img"),
  input: _styled("input"),
  ins: _styled("ins"),
  kbd: _styled("kbd"),
  keygen: _styled("keygen"),
  label: _styled("label"),
  legend: _styled("legend"),
  li: _styled("li"),
  link: _styled("link"),
  main: _styled("main"),
  map: _styled("map"),
  mark: _styled("mark"),
  menu: _styled("menu"),
  menuitem: _styled("menuitem"),
  meta: _styled("meta"),
  meter: _styled("meter"),
  nav: _styled("nav"),
  noindex: _styled("noindex"),
  noscript: _styled("noscript"),
  object: _styled("object"),
  ol: _styled("ol"),
  optgroup: _styled("optgroup"),
  option: _styled("option"),
  output: _styled("output"),
  p: _styled("p"),
  param: _styled("param"),
  picture: _styled("picture"),
  pre: _styled("pre"),
  progress: _styled("progress"),
  q: _styled("q"),
  rp: _styled("rp"),
  rt: _styled("rt"),
  ruby: _styled("ruby"),
  s: _styled("s"),
  samp: _styled("samp"),
  slot: _styled("slot"),
  script: _styled("script"),
  section: _styled("section"),
  select: _styled("select"),
  small: _styled("small"),
  source: _styled("source"),
  span: _styled("span"),
  strong: _styled("strong"),
  style: _styled("style"),
  sub: _styled("sub"),
  summary: _styled("summary"),
  sup: _styled("sup"),
  table: _styled("table"),
  template: _styled("template"),
  tbody: _styled("tbody"),
  td: _styled("td"),
  textarea: _styled("textarea"),
  tfoot: _styled("tfoot"),
  th: _styled("th"),
  thead: _styled("thead"),
  time: _styled("time"),
  title: _styled("title"),
  tr: _styled("tr"),
  track: _styled("track"),
  u: _styled("u"),
  ul: _styled("ul"),
  video: _styled("video"),
  wbr: _styled("wbr"),
  webview: _styled("webview"),
})

export { styled };
