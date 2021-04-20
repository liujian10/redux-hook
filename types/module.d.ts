declare module '*.png'
declare module '*.svg'
declare module '*.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}
