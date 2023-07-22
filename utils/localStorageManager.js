export const fav_list_key = "fav_list";

export const getFavList = () => {
  const list = localStorage.getItem(fav_list_key);
  if (list) {
    return JSON.parse(list);
  }
  return [];
};

export const addFav = (item) => {
  const list = getFavList();
  list.push(item);
  localStorage.setItem(fav_list_key, JSON.stringify(list));
};

export const removeFav = (item) => {
  const list = getFavList();
  const newList = list.filter((i) => i.id !== item.id);
  localStorage.setItem(fav_list_key, JSON.stringify(newList));
};

export const isFav = (item) => {
  const list = getFavList();
  const found = list.find((i) => i.id === item.id);
  return found ? true : false;
};

export const getFavCount = () => {
  const list = getFavList();
  return list.length;
};

export const clearFavList = () => {
  localStorage.removeItem(fav_list_key);
};
