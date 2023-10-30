export default function AccountsList({ accountsList }: any) {
  return (
    <>
      <ul aria-labelledby="account-list" style={{ listStyleType: "none" }}>
        {accountsList?.length > 0 ? (
          <>
            {accountsList?.map((item: any, key: number) => (
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
