function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => { //a series of functions that return functions
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware(); //initialization step
thunk.withExtraArgument = createThunkMiddleware; //an extra option

export default thunk;
