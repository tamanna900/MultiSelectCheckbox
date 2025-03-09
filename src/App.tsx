import React, { useState } from "react";
import MultiSelectCheckbox from "./MultiSelectCheckbox";

const options = [
  { id: "apple", label: "Apple" },
  { id: "banana", label: "Banana" },
  { id: "grape", label: "Grape" },
  { id: "mango", label: "Mango" },
];

const App = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-2">Select Fruits:</h2>
      <MultiSelectCheckbox
        options={options}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
      />
      <p className="mt-4">
        Selected: {selectedItems.length > 0 ? selectedItems.join(", ") : "None"}
      </p>
    </div>
  );
};

export default App;
