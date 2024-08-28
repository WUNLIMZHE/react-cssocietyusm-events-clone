import React from "react";

function Header(props){
  return (
    <div>
      <h1 className="font-bold text-3xl border-b-4 border-theme-700 w-min whitespace-nowrap">{props.headerName}</h1>
      <br></br>
    </div>
  );
}

export default Header;