import { AccountsList } from "./components";

export default function TemplatePage({ ...sharedPros }) {
  return (
    <>
      <AccountsList {...sharedPros} />
    </>
  );
}
