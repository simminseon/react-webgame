import React from "react";
import Button from "./Button";
import { buttonTheme } from "../../components/button/style";
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
  title: "Component/test",
  component: Button,
  decorators: [withKnobs],
};

export const test = () => {
  const label = text("children", "버튼");
  const theme = select("theme", buttonTheme);

  return <Button theme={theme}>{label}</Button>;
};

// export const Default = <Button>버튼</Button>;
// export const DarkGray = <Button>버튼</Button>;
// export const Orange = <Button>버튼</Button>;
// const Template = (args) => <Button {...args} />;
// export const Default = Template.bind();
// Default.args = {
//   children: "버튼",
// };

// export const DarkGray = Template.bind();
// DarkGray.args = {
//   theme: buttonTheme.darkGray,
//   children: "버튼",
// };

// export const Orange = Template.bind();
// Orange.args = {
//   theme: buttonTheme.orange,
//   children: "버튼",
// };
