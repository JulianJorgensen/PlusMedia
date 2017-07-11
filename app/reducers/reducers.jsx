export var modalReducer = (state = {show: false, title: '', body: ''}, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        show: true,
        ...action
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        show: false,
        title: '',
        body: ''
      };

    default:
      return state;
  }
};

export var scrollReducer = (state = {y: 0}, action) => {
  switch (action.type) {
    case 'SET_SCROLL_POSITION':
      console.log('setting scroll position in redux');
      return {
        ...state,
        y: action.scrollY
      };
    default:
      return state;
  }
};
