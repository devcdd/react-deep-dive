import * as React from "react";

export interface IntroProps {
  compiler: string;
  framework: string;
}

const Intro = (props: IntroProps) => {
  return (
    <h1>
      Hello from {props.compiler} and {props.framework}
    </h1>
  );
};

export default Intro;
