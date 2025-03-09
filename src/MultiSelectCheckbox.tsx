import React, { useState } from "react";

interface CheckboxItem {
  id: string;
  label: string;
}

interface MultiSelectCheckboxProps {
  options: CheckboxItem[];
  selectedItems: string[];
  onChange: (selected: string[]) => void;
}

const MultiSelectCheckbox: React.FC<MultiSelectCheckboxProps> = ({
  options,
  selectedItems,
  onChange,
}) => {
  const handleCheckboxChange = (id: string) => {
    const newSelected = selectedItems.includes(id)
      ? selectedItems.filter((item) => item !== id)
      : [...selectedItems, id];
    onChange(newSelected);
  };

  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label
          key={option.id}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={selectedItems.includes(option.id)}
            onChange={() => handleCheckboxChange(option.id)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default MultiSelectCheckbox;
