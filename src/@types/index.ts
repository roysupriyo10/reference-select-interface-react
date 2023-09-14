import { monthsLong } from "@/constants";

export const enum REDUCER_ACTION_TYPES {
  SET_TRADE_HISTORY,
  SET_SELECTED_MONTH,
};

export interface ReducerAction {
  type: REDUCER_ACTION_TYPES,
  payload: typeof monthsLong[number]
}

export type selectedMonth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Trade {
  _id: string,
  __v: number
  margin: number,
  quantity: number,
  entry: number,
  monthEnd: boolean,
  exit: number,
  entryCom: number,
  exitCom: number,
  paperTradeModifier: number,
  liquidationPrice: number,
  entryTime: number,
  exitTime: number,
  exitPositiveROE: number | null,
  exitNegativeROE: number | null,
  exitBlunt: number,
  exitBluntRatioed: number,
  side: 'LONG' | 'SHORT',
  id: string,
  whenLockedMargin: number | null,
  notes: string,
  excludeTrade: boolean,
  exBr: boolean,
}

export interface ApplicationState {
  tradeHistory: Trade[];
  selectedMonth: typeof monthsLong[number];
  mapPositives: number[];
  selectedReference: number | null
}
