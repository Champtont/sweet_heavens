const initialState = {
  isDeleting: false,
  wantsToLogin: false,
};

const allKnowingReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default allKnowingReducer;
