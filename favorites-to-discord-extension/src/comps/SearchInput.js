import React, {useEffect, useState} from "react";
import {Select} from "antd";
import './SearchInput.css'

const {Option, OptGroup} = Select;





function SearchInput(props) {
  const { onChange } = props;
  const [value, setValue] = useState();


  const handleChange = (val) => {
    if (value === val.value) {
      return;
    }
    setValue(val.value);
    onChange(val.value);
  };



  return (
    <Select
        labelInValue
        showSearch
        value={{value: value}}
        placeholder={props.placeholder}
        style={props.style}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onChange={handleChange}
        notFoundContent={null}
    >
      <Option value={"share"}>
        share
      </Option>
      <Option value={"job"}>
        job
      </Option>
    </Select>
  );
}

export default SearchInput;
