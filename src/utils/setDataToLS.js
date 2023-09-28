export default function setDataToLS(key, value) {
   return localStorage.setItem(key, JSON.stringify(value))
}