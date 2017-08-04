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
      return {
        ...state,
        y: action.scrollY
      };
    default:
      return state;
  }
};


let initialState = {
  homepage: '',
  about: '',
  capabilities: '',
  clientsContent: '',
  contact: '',
  dataCardsContent: '',
  dataCards: [],
  careers: [],
  teamMembers: [],
  services: [],
  clients: []
}
export var contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONTENT':
      return {
        ...state,
        ...action
      };
    default:
      return state;
  }
};
