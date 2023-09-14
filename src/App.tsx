import { Route, Routes } from "react-router-dom";
import { AllHistoryTable, MonthlyStats, SelectCurrentMonth } from "@/screens";
import { Navbar } from "./components";
import { reducer } from "./reducer";
import { initialState } from "./constants";

import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <header>
        <Navbar state={state} />
      </header>
      <Routes>
        <Route path="/" element={ <AllHistoryTable /> } />
        <Route path="/thirtydayroe" element={ <SelectCurrentMonth dispatch={dispatch} /> } />
        <Route path="/:month" element={ <MonthlyStats /> } />
      </Routes>
    </>
  )
}

export default App
