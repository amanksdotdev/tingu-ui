import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: { backgrounds: { default: "light" } },
  argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
const options = [
  { label: "Item 1", value: "item1" },
  { label: "Item 2 is the biggest label", value: "item2" },
  { label: "Item 3", value: "item3" },
  { label: "Item 4", value: "item4" },
  { label: "Item 5", value: "item5" },
];

export const Default: Story = {
  args: {
    value: null,
    onChange: (item) => {
      return;
    },
    options,
  },
};

export const Primary: Story = {
  args: {
    value: null,
    onChange: (item) => {
      return;
    },
    options,
    colorScheme: "primary",
  },
};

export const Secondary: Story = {
  args: {
    value: null,
    onChange: (item) => {
      return;
    },
    options,
    colorScheme: "secondary",
  },
};
