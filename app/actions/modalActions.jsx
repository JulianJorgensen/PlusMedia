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
    setTimeout(() => {
      window.scrollTo(0, getState().modal.lastScrollPosition);
    },10);
  }
};
