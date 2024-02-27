import React, { FC, useEffect, useState } from "react";
import { TMultiCheckRadioGroupProps } from "../../types/card";
import { Radio } from "antd";
import { radioBtnStyle } from "./EditableCard";

const MultiCheckRadioGroup: FC<TMultiCheckRadioGroupProps> = ({
  isEditable,
  toolsUsed,
  setTools,
}) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleRadioClick = (e) => {
    const value = e.target.value;
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];

    setSelectedValues(updatedValues.sort());
    // update parent state
    setTools(updatedValues.join(","));
  };

  const radioOptions = [
    { label: "Redux", value: "0" },
    { label: "Lodash", value: "1" },
    { label: "Ant Design", value: "2" },
    { label: "Webpack", value: "3" },
    { label: "Other", value: "4" },
  ];

  // initial state for toolsUsed
  useEffect(() => {
    if (toolsUsed) {
      setSelectedValues(toolsUsed.split(","));
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      {radioOptions.map((option) => (
        <Radio
          disabled={!isEditable}
          style={radioBtnStyle(selectedValues.includes(option.value))}
          key={option.value}
          value={option.value}
          checked={selectedValues.includes(option.value)}
          onClick={handleRadioClick}
        >
          {option.label}
        </Radio>
      ))}
    </div>
  );
};

export default MultiCheckRadioGroup;
