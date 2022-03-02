import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
  {
    title: "what is react",
    content: "react is a frontend framework.",
  },
  {
    title: "why use react",
    content: "react is the favorite JS library among engineers.",
  },
  {
    title: "how do you use react",
    content: "You use react by creating components.",
  },
];

const options = [
  {
    label: "The color red.",
    value: "red",
  },
  {
    label: "The color green.",
    value: "green",
  },
  {
    label: "The color blue.",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
        labelText="Select a color"
      /> */}
      <Translate />
    </div>
  );
};

export default App;
