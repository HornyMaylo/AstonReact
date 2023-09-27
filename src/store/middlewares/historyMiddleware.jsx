import currentUserKeyCreator from "../../utils/currentUserKeyCreator";

const historyMIddlewares = (store) => (next) => (action) => {
  const { history } = store.getState().history;

  if (action.type === 'history/addToHistory') {
    localStorage.setItem(
      currentUserKeyCreator('history'),
      JSON.stringify([...history, action.payload]),
    );
  }
  if (action.type === 'history/resetHistory') {
    localStorage.setItem(currentUserKeyCreator('history'), JSON.stringify([]));
  }

  return next(action);
};

export default historyMIddlewares;