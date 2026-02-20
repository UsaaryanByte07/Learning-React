export const counterReducer = (state, action) => {
  let newState = state;
  switch (action.type) {
    case "INCREMENT":
      newState += 1;
      break;
    case "DECREMENT":
      newState -= 1;
      break;
    case "RESET":
      newState = 0;
      break;
    case "DOUBLE":
      newState *= 2;
      break;
    case "INCREMENT_BY": {
      if (action.payload.num != '') {
        newState += parseInt(action.payload.num);
      }
      break;
    }
    default:
      newState;
  }
  return newState;
};
