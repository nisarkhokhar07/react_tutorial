export const INITIAL_STATE = {
    title: "",
    body: "",
    author: "mario",
    isPending: false,
  };

  export const postReducer = (state, action) => {
    switch (action.type) {
      case "fetch-success":
        return {
          ...state,
          isPending: false,
        };
      case "fetch-start":
        return {
          ...state,
          isPending: true,
        };
      case "change-input":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  };