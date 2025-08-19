export const SaveDataToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const GetDataFromStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};
