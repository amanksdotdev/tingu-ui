import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { backgrounds: { default: "light" } },
  argTypes: {
    children: {
      options: ["Default", "Primary"],
      mapping: {
        Default: "Default",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Primary: Story = {
  args: { colorScheme: "primary", children: ["Primary"] },
};

export const Secondary: Story = {
  args: { colorScheme: "secondary", children: ["Secondary"] },
};

export const Success: Story = {
  args: { colorScheme: "success", children: ["Success"] },
};
export const Danger: Story = {
  args: { colorScheme: "danger", children: ["Danger"] },
};
export const Warning: Story = {
  args: { colorScheme: "warning", children: ["Warning"] },
};
export const Info: Story = {
  args: { colorScheme: "info", children: ["Info"] },
};
export const Light: Story = {
  args: { colorScheme: "light", children: ["Light"] },
};
export const Dark: Story = {
  args: { colorScheme: "dark", children: ["Dark"] },
};

