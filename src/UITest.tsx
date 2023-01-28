import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Accordion, Button, Container } from "./components";
import Modal from "./components/modal/Modal";
import { ModalFooter } from "./components/modal/ModalFooter";
import { ModalBody } from "./components/modal/ModalBody";
import { ModalHeader } from "./components/modal/ModalHeader";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Container>
        <Accordion
          items={[
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
          ]}
        />
        <Accordion
          items={[
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
          ]}
        />
        <Button colorScheme="primary" onClick={() => setIsOpen(true)}>
          Open modal
        </Button>
        <Accordion
          items={[
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
          ]}
        />

        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          showCloseButton
          // height={400}
        >
          <ModalHeader>
            <h1 className="text-xl font-semibold">This is Header</h1>
          </ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              tenetur dolorum atque accusantium delectus esse mollitia dolores
              nostrum modi qui quisquam, debitis nam enim, consequuntur maxime,
              vitae temporibus vero dolore.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              temporibus, consequuntur neque doloribus deleniti porro laboriosam
              sint aliquid fugit exercitationem at facere magnam? Optio,
              veritatis repellendus ut omnis veniam fugit?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              temporibus, consequuntur neque doloribus deleniti porro laboriosam
              sint aliquid fugit exercitationem at facere magnam? Optio,
              veritatis repellendus ut omnis veniam fugit?
            </p>
          </ModalBody>
          <ModalFooter rightAligned>
            <Button colorScheme="primary" size="small">
              Open
            </Button>
            <Button size="small" colorScheme="light">
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
