import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Modal, ModalProps } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {},
  args: {
    isOpen: true,
    onRequestClose: () => {},
  },
  argTypes: {
    children: {
      options: ["Default"],
      mapping: { Default: <p className="p-10">hello world</p> },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: { minWidth: 400, minHeight: 300, children: ["Default"] },
};
