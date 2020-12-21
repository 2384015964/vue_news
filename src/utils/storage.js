export const getItem = name => {
  const data = window.localStorage.getItem(name);
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};
export const setItem = (name, value) => {
  if (typeof value === "object") {
    JSON.stringify(value);
  }
  window.localStorage.setItem(name, value);
};
export const removeitem = name => {
  window.localStorage.removeItem(name);
};
