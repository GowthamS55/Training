export const initialState = [];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, {  text: action.payload, status: "PENDING" }];
      
    case "MARK_COMPLETED":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, status: "COMPLETED" } : todo
      );
      
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.payload);
      
    default:
      return state;
  }
};
