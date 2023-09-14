import { ApplicationState, REDUCER_ACTION_TYPES, ReducerAction } from "@/@types";

export const reducer: ( state: ApplicationState, action: ReducerAction ) => ApplicationState = (state, { type, payload }) => {
  switch (type) {
    case REDUCER_ACTION_TYPES.SET_TRADE_HISTORY:
      return ({...state});
    case REDUCER_ACTION_TYPES.SET_SELECTED_MONTH:
      return ({ ...state, selectedMonth: payload })
  }
}
