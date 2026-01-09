const { createStore, applyMiddleware } = require("redux");
const thunkMiddleware = require("redux-thunk").default;


//Create state initial state
const postInitialState = {
  posts: [],
  error: "",
  loading: false,
};

//Create Action Creators
const fetchPostsRequest = () => {
  return { type: "REQUEST_STARTED" };
};
const fetchPostsSuccess = (posts) => {
  return { type: "REQUEST_SUCCESS", payload: posts };
};
const fetchPostsFailure = (error) => {
  return { type: "REQUEST_ERROR", payload: error };
};
const fetchPostAction = (post) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostsRequest());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      dispatch(fetchPostsSuccess(data));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};

//Create Reducer
const postReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case "REQUEST_STARTED":
      return { ...state, loading: true };
    case "REQUEST_SUCCESS":
      return { ...state, loading: false, posts: action.payload, error: "" };
    case "REQUEST_ERROR":
      return { ...state, loading: false, posts: [], error: action.payload };
    default:
      return state;
  }
};

//Create Store
const store = createStore(postReducer, applyMiddleware(thunkMiddleware));

//Subscribe to the store
store.subscribe(() => {
  console.log("Store accessed - ",store.getState());
});

//Dispatch the async action
store.dispatch(fetchPostAction());
