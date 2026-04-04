import React from "react";

function Action(props) {
  return (
    <div>
      <button type="submit" className="login-btn">
        {props.action==="Sign Up"? "LOGIN" : "SIGN UP"} TO WORKSPACE
      </button>
      <p className="signup">
       {props.content} <a href={props.href}>{props.action}</a>
      </p>
    </div>
  );
}

export default Action;
