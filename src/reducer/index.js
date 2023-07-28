const initialstate = {
  data: [],
  loading: false,
  error: "",
};

const reducerdata = (state = initialstate, action) => {
  console.log("action", action);
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload };
    case "EDIT_DATA":
      return state;
    default:
      return state;
  }
};

export default reducerdata;
