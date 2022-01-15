import { SignLegacy, SignersList } from "legacy-xyz";

function Guestbook() {
  return (
    <>
      <SignLegacy projectId="legacyxyz" />
      <SignersList projectId="legacyxyz" />
    </>
  );
}

ReactDOM.render(<Guestbook />, document.getElementById("id"));
