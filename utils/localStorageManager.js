const _ = require("lodash");

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
  let list = getFavList();
  list = _.remove(list, (i) => i.id !== item.id);
  localStorage.setItem(fav_list_key, JSON.stringify(list));
};

export const isFav = (item) => {
  const list = getFavList();
  const found = _.find(list, (i) => i.id === item.id);
  return found ? true : false;
};

export const getFavCount = () => {
  const list = getFavList();
  return list.length;
};

export const clearFavList = () => {
  localStorage.removeItem(fav_list_key);
};

export const exportFavList = () => {
  const list = getFavList();
  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(list));
  const downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "fav_list.txt");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

