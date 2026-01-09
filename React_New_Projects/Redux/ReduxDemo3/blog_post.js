// Import createStore from redux if needed
const { createStore, combineReducers } = require("redux");

// Define the initial state of the counter
const postInitialState = {
  posts: [],
};
const userInitialState = {
  posts: [],
};
//Define Action Creators
const addPostAction = (post) => {
  return { type: "ADD_POST", payload: post };
};
const removePostAction = (postId) => {
  return { type: "REMOVE_POST", payload: postId };
};
const addUserAction = (post) => {
  return { type: "ADD_POST", payload: post };
};
const removeUserAction = (postId) => {
  return { type: "REMOVE_POST", payload: postId };
};
// Define the reducer function to handle state changes based on actions
const postReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.payload] };
    case "REMOVE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, posts: [...state.posts, action.payload] };
    case "REMOVE_USER":
      return {
        ...state,
        posts: state.users.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

// Define Store object
const store = createStore(postReducer);
// subscribe
store.subscribe(() => {
  console.log("Updated State:", store.getState());
});
// dispatch
store.dispatch(
  addPostAction({
    id: 1,
    title: "Javascript Post",
    content: "This is the content of the first post.",
  })
);
store.dispatch(
  addPostAction({
    id: 2,
    title: "React JS Post",
    content: "This is the content of the first post.",
  })
);
store.dispatch(
  addPostAction({
    id: 3,
    title: "Android Post",
    content: "This is the content of the first post.",
  })
);
store.dispatch(
  addPostAction({
    id: 4,
    title: "Java Post",
    content: "This is the content of the first post.",
  })
);
store.dispatch(
  addPostAction({
    id: 5,
    title: "Kotlin Post",
    content: "This is the content of the first post.",
  })
);
store.dispatch(removePostAction(2));
