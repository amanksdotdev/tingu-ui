import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Accordion, Container } from "./components";

const App = () => {
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
      </Container>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
