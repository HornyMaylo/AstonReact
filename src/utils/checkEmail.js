export default function checkEmail(email) {
   let users = [];
   if(localStorage.getItem('users') !== null) {
      users = Array.from(JSON.parse(localStorage.getItem('users')));
   }

   return users.filter((item) => item.email === email)[0];
}