import React from "react";

function Input(props) {
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required
        onChange={(event)=>{
            props.onChange(event);
        }}
      />
      <small style={{ color: "red" }}>{props.error?props.error:""}</small>
    </div>
  );
}

export default Input;
