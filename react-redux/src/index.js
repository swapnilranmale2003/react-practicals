import { createStore } from 'redux';
import { combineReducers } from '@reduxjs/toolkit'


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux store"
  };
}
function butIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "First Redux store"
  };
}
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// };
const initialCakeState = {
  numOfCakes: 10,
  
};
const initialIceCreamState = {
  numOfIceCreams: 20
  
};
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1
//       };
//       case BUY_ICECREAM:
//         return {
//           ...state,
//           numOfIceCreams : state.numOfIceCreams - 1
//         };
//     default:
//       return state;
//   }
// };
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
      
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    
      case BUY_ICECREAM:
        return {
          ...state,
          numOfIceCreams : state.numOfIceCreams - 1
        };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer
})
const store = createStore(rootReducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('Updated state', store.getState());
});
store.dispatch(buyCake());  //update the store
store.dispatch(buyCake());
store.dispatch(butIceCream()) 
store.dispatch(butIceCream()) 

unsubscribe() //to the changes 
 

