interface actionType {
  type: string;
}

interface actionType {
  type: string;
}

export const createStore = function(reducer, initState) {
  let store = initState;
  let subscribeQueue = [];
  let currentReducer = reducer;

  const getStore = () => {
    return store;
  }

  const replaceReduce = (reducer) => {
    currentReducer = reducer;
  }

  const dispatch = (action: actionType) => {
    store = currentReducer(action);
    subscribeQueue.forEach(item => {
      item.call();
    })
  }

  return {
    getState,
    dispatch,
    subscribe,
    replaceReducer,
  }
}

const connect = (mapDispatchToProps, mapStateToProps) => {
  return function (wrapper) {
    <wrapper
      
    ></wrapper>
  }
}
 