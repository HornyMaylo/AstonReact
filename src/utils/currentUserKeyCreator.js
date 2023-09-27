import getDataFromLS from "./getDataFromLS";

export default function currentUserKeyCreator(key) {
   const currentUser = getDataFromLS('currentUser');
   if(currentUser?.email) {
      return currentUser.email + key;
   }
   return '';
}