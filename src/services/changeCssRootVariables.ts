import { Theme } from "../context/CurrentContext";

export const changeCssRootVariables = (theme: Theme) => {
  const root = document.querySelector(':root') as HTMLElement;
    
    const components = [
      '--body-background', 
      '--components-background',
      '--card-background',
      '--text-color'
    ];

    components.map(component => root.style.setProperty(`${component}-default`, `var(${component}-${theme})`));
};