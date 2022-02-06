import React from "react";

function Header({ number, increment }) {
  // number propunu almak için.
  console.log("Header component re-rendered!");
  return (
    <div>
      Header - {number}
      <br />
      <br />
      <button onClick={increment}>Click</button>
      {/* <code>{JSON.stringify(data)}</code> */}
    </div>
  );
}

export default React.memo(Header);
// gereksiz renderin önüne geçmek için.
