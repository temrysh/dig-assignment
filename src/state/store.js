import { createStore, combineReducers } from "redux";

const SET_LIST = "SET_LIST";

const createReducer = actionType => initState => (
  state = initState,
  { type, payload }
) => (type === actionType ? payload : state);

export const setList = list => ({ type: SET_LIST, payload: list });

export const store = createStore(
  combineReducers({
    list: createReducer(SET_LIST)([])
  })
);
