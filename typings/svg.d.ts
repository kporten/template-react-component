declare module '*.svg' {
  const url: string;
  const ReactComponent: React.FC<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default url;
  export { ReactComponent };
}
