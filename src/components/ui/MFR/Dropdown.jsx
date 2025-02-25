import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Dropdox = styled.select`
  padding: 10px 16px;
  color: ${(props) => (props.value === "all" ? "#fff" : "#3945BD")};
  background-color: ${(props) => (props.value === "all" ? "#3945BD" : "#fff")};
  border: 1px solid ${(props) => props.bordercolor};
  border-radius: 20px;
  font-weight: 500;
  display: inline-block;
  width: auto; /* Set to auto to adjust based on content */
  min-width: ${(props) =>
    props.width ? props.width : "72px"}; /* Minimum width to avoid collapse */
  white-space: nowrap; /* Prevents text wrapping */
`;
const Options = styled.option`
  padding: 10px 16px;
  margin: 10px 16px;
`;

function SelectBox({ selectedValue, setSelectedValue, options, borderColor }) {
  const [width, setWidth] = useState(0);
  const selectRef = useRef(null);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    if (selectRef.current) {
      setWidth(selectRef.current.scrollWidth);
    }
  }, [selectedValue, options]);

  return (
    <Dropdox
      ref={selectRef}
      value={selectedValue}
      onChange={handleChange}
      bordercolor={selectedValue === "all" ? "#3945BD" : borderColor}
      width={width}
    >
      {options?.map((option) => (
        <Options key={option.value} value={option.value}>
          {option.name}
        </Options>
      ))}
    </Dropdox>
  );
}

export default SelectBox;
