import { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const allVotes = good + neutral + bad;
  const average = (good - bad) / allVotes;
  const positiveRatio = (good / allVotes) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <button type="button" onClick={() => setGood(good + 1)}>
        good
      </button>
      <button type="button" onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button type="button" onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {allVotes}</p>
      <p>average {isNaN(average) ? 0 : average}</p>
      <p>positive {isNaN(positiveRatio) ? 0 : positiveRatio} %</p>
    </div>
  );
};

export default App;
