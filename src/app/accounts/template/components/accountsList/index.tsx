export default function AccountsList({ accounts }: any) {
  return (
    <>
      <ul aria-labelledby="account-list">
        {accounts?.length > 0 ? (
          <>
            {accounts?.map((item: any, key: number) => (
              <li key={key} data-testid="account-list-item">
                {item?.name}
              </li>
            ))}
          </>
        ) : (
          <li data-testid="account-not-found">No accounts found.</li>
        )}
      </ul>
    </>
  );
}
