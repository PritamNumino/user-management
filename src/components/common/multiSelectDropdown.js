import Multiselect from "multiselect-react-dropdown";
import React from "react";

const MultiSelectDropdown = (props) => {
  return (
    <>
      <div className={props.error && "multiSelectDropdownError"}>
        <Multiselect
          options={props.options}
          isObject={false}
          showArrow={true}
          onSelect={e => props.setOptions(props.title, e)}
          onRemove={e => props.setOptions(props.title, e)}
        />
      </div>
      {props.error && <div className="errorText">{props.error}</div>}
    </>
  );
};

export default MultiSelectDropdown;
