import { useState } from 'react';

type StatisticsProps = {
  good: number;
  neutral: number;
  bad: number;
  allVotes: number;
  average: number;
  positiveRatio: number;
};

const StatisticLine = ({
  text,
  value,
}: {
  text: string;
  value: number | string;
}) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = ({
  good,
  neutral,
  bad,
  allVotes,
  average,
  positiveRatio,
}: StatisticsProps) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={allVotes} />
      <StatisticLine text="average" value={isNaN(average) ? 0 : average} />
      <StatisticLine
        text="positive"
        value={isNaN(positiveRatio) ? 0 : `${positiveRatio} %`}
      />
    </>
  );
};

const Button = ({
  text,
  clickHandler,
}: {
  text: string;
  clickHandler: () => void;
}) => {
  return (
    <button type="button" onClick={clickHandler}>
      {text}
    </button>
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
      <Button text="good" clickHandler={() => setGood(good + 1)} />
      <Button text="neutral" clickHandler={() => setNeutral(neutral + 1)} />
      <Button text="bad" clickHandler={() => setBad(bad + 1)} />
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
