const initialState = {
  users: [],
  loading: false,
  error: null,
  total: 0,
  activePage: 1,
  isModalOpen: false,
  btnLoading: false,
  selected: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "userStateChange":
      return { ...state, ...payload };
    case "userModal":
      return { ...state, isModalOpen: !state.isModalOpen };
    default:
      return state;
  }
};

export default userReducer;
