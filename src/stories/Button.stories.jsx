import React from "react";

import Button, { Variants } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: Variants.Primary,
  Children: "Primary",
};

export const White = Template.bind({});
White.args = {
  variant: Variants.White,
  Children: "White",
};
