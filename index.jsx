import { SignLegacy, SignersList } from "legacy-xyz";
import React from 'react';
import ReactDOM from 'react-dom';

function Guestbook() {
  return (
    <>
      <SignLegacy projectId="legacyxyz" />
      <SignersList projectId="legacyxyz" />
    </>
  );
}

ReactDOM.render(<Guestbook />, document.getElementById("guestbook"));
