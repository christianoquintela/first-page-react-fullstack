declare module '*.jpg' {
    const value: any;
    export default value;
  }
  
  declare module '*.png' {
    const value: any;
    export default value;
  }
  declare module '*.svg' {
    const value: any;
    export default value;
  }
  // declare module "*.module.css";
  declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }
  