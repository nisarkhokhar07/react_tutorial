export const INITIAL_STATE = {
    title: "",
    body: "",
    author: "",
    isPending: false,
  };

  export const postReducer = (state = INITIAL_STATE, action) => {
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