// 액션
const INCREMENT = "INCREMENT";
// function increase1(size){
//     return {type:"INCREMENT",size:size};
// }

export const increase = (size) => {
  return { type: INCREMENT, size: size };
};
//export {increase};

const initstate = {
  number: 0,
};

// (state,action)
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + action.size };
    default:
      return state;
  }
};
export default reducer;
