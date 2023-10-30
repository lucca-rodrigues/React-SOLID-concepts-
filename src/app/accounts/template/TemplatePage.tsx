import { AccountsList } from "./components";

export default function TemplatePage({ ...sharedPros }) {
  const { setFilter } = sharedPros;
  return (
    <>
      <h1>Accounts list</h1>
      <input data-testid="input-search" placeholder="search" onChange={(e: any) => setFilter(e.target.value)} />

      <AccountsList {...sharedPros} />
    </>
  );
}
