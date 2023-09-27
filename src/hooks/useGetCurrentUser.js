import { store } from "../store/store";

export function useGetCurrentUser() {
   const currentUser = store.getState().user;
   return currentUser;
}