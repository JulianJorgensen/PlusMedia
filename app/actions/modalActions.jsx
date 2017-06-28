// Open modal and set content
export var openModal = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'OPEN_MODAL',
      ...data
    });
  }
};

// Open modal and set content
export var closeModal = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'CLOSE_MODAL'});
  }
};
