export const getUserFromStorage = () => {
  const key = process.env.REACT_APP_LOCALHOST_KEY;
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  const now = Date.now();

  if (now > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.data;
};
