/**
 * counter reducer
 */
const initState = {
  projectName: null,
};
/**
 * 写法一：export default function
 * 写法二：
 *  const func=()=>{}
 *  export default func
 */
//export default function counter(state = initState, action) {
const counter = (state = initState, action) => {
  let newState = state;
  switch (newState) {
    case "GET_PROJECT":
      newState.projectName = action.payload.projectName;
      break;
    default:
      break;
  }
  return {...newState};
};
export default counter;
