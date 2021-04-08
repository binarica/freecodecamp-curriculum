const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  return action.type == 'LOGIN' ? { login: true } : state;
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  };
};
