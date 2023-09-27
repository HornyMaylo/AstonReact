export default function getDataFromLS(key) {
  return JSON.parse(localStorage.getItem(key));
}