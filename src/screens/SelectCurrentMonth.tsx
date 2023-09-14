import { REDUCER_ACTION_TYPES, ReducerAction } from "@/@types"

interface SelectCurrentMonthProps {
  dispatch: React.Dispatch<ReducerAction>
}

const SelectCurrentMonth: React.FC<SelectCurrentMonthProps> = ({ dispatch }) => {
  return (
    <div>
      <button
        className="
          btn
          rounded-full
          py-2
          px-3
          bg-sky-700
        "
        onClick={() => {
          dispatch({
            type: REDUCER_ACTION_TYPES.SET_SELECTED_MONTH,
            payload: "january"
          })
        }}
      >Change Month</button>
    </div>
  )
}

export default SelectCurrentMonth;
