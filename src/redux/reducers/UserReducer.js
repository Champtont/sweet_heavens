const initialState = {
  currentUser: null,
  cart: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
