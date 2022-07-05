import React from 'react';
import { getDefaultBoard, getWinner, oppositePlayer } from './utils';

function App() {
  const [currPlayer, setCurrPlayer] = React.useState<'X' | 'O'>('X');
  const [board, setBoard] = React.useState(() => getDefaultBoard());
  const onClick = React.useCallback((i: number, j: number) => {
    const newBoard = [...board];
    newBoard[i][j] = currPlayer;
    setBoard(newBoard);
    setCurrPlayer(e => oppositePlayer(e));
  }, [board, setCurrPlayer, setBoard]);
  const onReset = React.useCallback(() => {
    console.log('click')
    setBoard(getDefaultBoard());
  }, [setBoard, setCurrPlayer])
  const winner = React.useMemo(() => getWinner(board), [board]);
  const isGameOver = React.useMemo(() =>
    board.every(row => row.every(cell => cell !== ''))
    ||
    winner !== null,
    [board, winner]);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      {isGameOver ? <h3 className='text-3xl text-gray font-semibold'>{winner ?
        `The Winner Is ${winner}` :
        'Its A Tie'}
      </h3> : <div className='flex flex-row items-center m-3 gap-2 text-5xl font-bold border-[3px] p-3 rounded-lg border-b-black-bg' >
        <h3 className='text-slate-700'>Now:</h3>
        <h3 className='text-black-light'>{currPlayer}</h3>
      </div>}
      {board.map((row, i) => (
        <div className='flex flex-row justify-center my-1 mx-1' key={i}>
          {row.map((col, j) => (
            <button
              onClick={() => onClick(i, j)}
              className='w-24 h-24 border border-black-light mx-1 rounded-md' key={`${i}-${j}`}>
              <h3 className='text-3xl text-black-light font-bold'>{col}</h3>
            </button>
          ))}
        </div>
      ))}
      {isGameOver ? <button onClick={onReset}>Reset</button> : null}
    </div>
  );
}

export default App;
