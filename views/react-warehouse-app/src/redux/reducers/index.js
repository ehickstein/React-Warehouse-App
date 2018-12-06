import {admin, user} from '../constants/action-types';
const initialState = {
  permissions: admin
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case admin:
        return { ...state, permissions: admin}
      case user:
        return {...state, permissions: user}
      default: return state;
    }
};

export default rootReducer;