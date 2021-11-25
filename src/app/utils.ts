export const getRoutePath = (path: string) =>
  [
    // eslint-disable-next-line no-restricted-globals -- safe
    process.env.BASE_PATH && location.pathname.startsWith(process.env.BASE_PATH)
      ? process.env.BASE_PATH
      : process.env.BASE_ROUTE,
    path,
  ].join("");
