export type Turn = {
  square: {
    row: number,
    col: number,
  },
  player: string,
}

export type GameBoard = Turn;