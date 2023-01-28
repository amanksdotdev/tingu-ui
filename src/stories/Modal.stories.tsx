import React, { Fragment, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalProps,
} from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <Button colorScheme="primary" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <p className="p-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptas
          architecto sit accusamus sed saepe magnam, voluptatem, quo
          dignissimos, asperiores sapiente quas! Deserunt, obcaecati. Laborum ea
          temporibus tempore aliquam ipsa.
        </p>
      </Modal>
    </Fragment>
  );
};

export const WithHeaderAndFooter = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <Button colorScheme="primary" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <ModalHeader>
          <h1 className="text-xl font-semibold">This is modal header</h1>
        </ModalHeader>
        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            excepturi voluptatem quae temporibus fuga, earum culpa ullam
            molestias, impedit ex libero sed sunt eos. Dolore delectus explicabo
            sit atque beatae?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            modi, ab optio quisquam amet impedit iusto. Minus commodi dolorum
            eveniet voluptas temporibus? Architecto qui, quia delectus
            consequuntur adipisci minus id?
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => console.log("clicked!")}
            colorScheme="primary"
            size="small"
          >
            Get Started
          </Button>
          <Button onClick={() => setIsOpen(false)} size="small">
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};
