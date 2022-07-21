import React from "react";
import Button from "./Button";
import { buttonTheme } from "../../components/button/style";

export default {
  title: "Component/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind();
Default.args = {
  children: "버튼",
};

export const DarkGray = Template.bind();
DarkGray.args = {
  theme: buttonTheme.darkGray,
  children: "버튼",
};

export const Orange = Template.bind();
Orange.args = {
  theme: buttonTheme.orange,
  children: "버튼",
};
