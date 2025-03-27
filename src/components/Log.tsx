import {Turn} from "../types/Turns.ts";

export const Log = ({turns}: { turns: Turn[] }) => {

  return <ol id='log'>
    {turns.map((turn) => <li
        key={`${turn.square.row}${turn.square.col}`}>
        {turn.player} selected {turn.square.row}, {turn.square.col}
      </li>
    )}
  </ol>;
}