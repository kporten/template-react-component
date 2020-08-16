declare module '*.svg' {
  const url: string;
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  export default url;
  export { ReactComponent };
}
