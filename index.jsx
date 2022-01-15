import { SignLegacy, SignersList } from "legacy-xyz";
import React from 'react';
import ReactDOM from 'react-dom';

function Guestbook() {
  return (
    <div style={{ marginRight: 20 }}>
      <SignLegacy projectId="legacyxyz" />
      <br />
      <SignersList projectId="legacyxyz" />
    </div>
  );
}

ReactDOM.render(<Guestbook />, document.getElementById("guestbook"));
