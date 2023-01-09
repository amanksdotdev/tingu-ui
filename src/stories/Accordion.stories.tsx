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
      options: ["AccordionItem"],
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
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const WithItemProp: Story = {
  args: {
    items: [
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
    ],
  },
};

export const CompositeComponent: Story = {
  args: {
    children: ["AccordionItem"],
  },
};