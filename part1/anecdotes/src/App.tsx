import { useState } from 'react';

const App = () => {
  const [selected, setSelected] = useState(0);
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];
  const [votes, setVotes] = useState<number[]>(() =>
    Array(anecdotes.length).fill(0)
  );
  const indexOfHighestVote = votes.indexOf(Math.max(...votes));

  const generateRandomNumber = () => {
    const maxNumber = anecdotes.length - 1;
    const getRandomNumber = () => Math.round(Math.random() * maxNumber);
    let result = getRandomNumber();

    /**
     * If the new number is the same as the currently selected number,
     * regenerate until a unique number is generated.
     */
    while (result === selected) {
      const newNumber = getRandomNumber();
      result = newNumber;
    }

    return result;
  };

  const handleNextAnecdote = () => {
    const randomNumber = generateRandomNumber();
    setSelected(randomNumber);
  };

  const handleVote = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
    handleNextAnecdote();
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button type="button" onClick={handleVote}>
        vote
      </button>
      <button type="button" onClick={handleNextAnecdote}>
        next anecdote
      </button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexOfHighestVote]}</p>
      <p>has {votes[indexOfHighestVote]} votes</p>
    </div>
  );
};

export default App;
