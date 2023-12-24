import { useState } from 'react';

type StatisticsProps = {
  good: number;
  neutral: number;
  bad: number;
  allVotes: number;
  average: number;
  positiveRatio: number;
};

const Statistics = ({
  good,
  neutral,
  bad,
  allVotes,
  average,
  positiveRatio,
}: StatisticsProps) => {
  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {allVotes}</p>
      <p>average {isNaN(average) ? 0 : average}</p>
      <p>positive {isNaN(positiveRatio) ? 0 : positiveRatio} %</p>
    </>
  );
};

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
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allVotes={allVotes}
        average={average}
        positiveRatio={positiveRatio}
      />
    </div>
  );
};

export default App;
