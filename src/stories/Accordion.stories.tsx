import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  Accordion,
  AccordionButton,
  AccordionContent,
  AccordionItem,
} from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: { backgrounds: { default: "light" } },
  argTypes: {
    children: {
      options: ["AccordionItem", "WithCustomStyling"],
      mapping: {
        AccordionItem: (
          <>
            <AccordionItem>
              <AccordionButton>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </AccordionButton>
              <AccordionContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur incidunt quidem provident quos cum quisquam dolorum
                veritatis reprehenderit iste autem error unde, cupiditate nihil,
                vitae laborum molestias pariatur aperiam ullam!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </AccordionButton>
              <AccordionContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur incidunt quidem provident quos cum quisquam dolorum
                veritatis reprehenderit iste autem error unde, cupiditate nihil,
                vitae laborum molestias pariatur aperiam ullam!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </AccordionButton>
              <AccordionContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur incidunt quidem provident quos cum quisquam dolorum
                veritatis reprehenderit iste autem error unde, cupiditate nihil,
                vitae laborum molestias pariatur aperiam ullam!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </AccordionButton>
              <AccordionContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur incidunt quidem provident quos cum quisquam dolorum
                veritatis reprehenderit iste autem error unde, cupiditate nihil,
                vitae laborum molestias pariatur aperiam ullam!
              </AccordionContent>
            </AccordionItem>
          </>
        ),
        WithCustomStyling: (
          <>
            <AccordionItem>
              <AccordionButton className="flex gap-4 focus:bg-blue-300 focus:text-white">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <span>👋</span>
              </AccordionButton>
              <AccordionContent className="bg-blue-100">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur incidunt quidem provident quos cum quisquam dolorum
                veritatis reprehenderit iste autem error unde, cupiditate nihil,
                vitae laborum molestias pariatur aperiam ullam!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton className="focus:bg-red-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </AccordionButton>
              <AccordionContent className="bg-red-100">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur incidunt quidem provident quos cum quisquam dolorum
                veritatis reprehenderit iste autem error unde, cupiditate nihil,
                vitae laborum molestias pariatur aperiam ullam!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton className="focus:bg-green-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </AccordionButton>
              <AccordionContent className="bg-green-100">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur incidunt quidem provident quos cum quisquam dolorum
                veritatis reprehenderit iste autem error unde, cupiditate nihil,
                vitae laborum molestias pariatur aperiam ullam!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton className="focus:bg-yellow-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </AccordionButton>
              <AccordionContent className="bg-yellow-100">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur incidunt quidem provident quos cum quisquam dolorum
                veritatis reprehenderit iste autem error unde, cupiditate nihil,
                vitae laborum molestias pariatur aperiam ullam!
              </AccordionContent>
            </AccordionItem>
          </>
        ),
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

const items = [
  {
    title: "A random title of the accordion",
    content:
      "Sint nisi quis dolor officia ipsum fugiat irure nulla Lorem pariatur commodo non sunt. Sunt dolore pariatur est officia nulla adipisicing sunt consequat est in reprehenderit. Ex reprehenderit magna culpa ex proident amet magna adipisicing. Do commodo voluptate eiusmod excepteur labore eiusmod.",
  },
  {
    title: "A random title of the accordion",
    content:
      "Sint nisi quis dolor officia ipsum fugiat irure nulla Lorem pariatur commodo non sunt. Sunt dolore pariatur est officia nulla adipisicing sunt consequat est in reprehenderit. Ex reprehenderit magna culpa ex proident amet magna adipisicing. Do commodo voluptate eiusmod excepteur labore eiusmod.",
  },
  {
    title: "A random title of the accordion",
    content:
      "Sint nisi quis dolor officia ipsum fugiat irure nulla Lorem pariatur commodo non sunt. Sunt dolore pariatur est officia nulla adipisicing sunt consequat est in reprehenderit. Ex reprehenderit magna culpa ex proident amet magna adipisicing. Do commodo voluptate eiusmod excepteur labore eiusmod.",
  },
  {
    title: "A random title of the accordion",
    content:
      "Sint nisi quis dolor officia ipsum fugiat irure nulla Lorem pariatur commodo non sunt. Sunt dolore pariatur est officia nulla adipisicing sunt consequat est in reprehenderit. Ex reprehenderit magna culpa ex proident amet magna adipisicing. Do commodo voluptate eiusmod excepteur labore eiusmod.",
  },
];
export const WithItemsProp: Story = {
  args: {
    items,
  },
};

export const CompositeComponent: Story = {
  args: {
    children: ["AccordionItem"],
  },
};

export const WithAnimation: Story = {
  args: { items, animate: true },
};

export const WithFocusRings: Story = {
  args: { items, focusRings: true },
};

export const withCustomClasses: Story = {
  args: {
    children: ["WithCustomStyling"],
    animate: true,
    expanded: true,
  },
};
