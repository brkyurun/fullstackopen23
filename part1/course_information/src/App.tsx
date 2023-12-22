import { ComponentPropsWithoutRef } from 'react';

const Header = ({ header }: { header: string }) => {
  return <h1>{header}</h1>;
};

const Part = ({
  title,
  exerciseCount,
}: {
  title: string;
  exerciseCount: number;
}) => {
  return (
    <p>
      {title} {exerciseCount}
    </p>
  );
};

const Content = ({
  partsToRender,
}: {
  partsToRender: ComponentPropsWithoutRef<typeof Part>[];
}) => {
  return (
    <div>
      {partsToRender.map((part) => (
        <Part
          key={part.title}
          title={part.title}
          exerciseCount={part.exerciseCount}
        />
      ))}
    </div>
  );
};

const Total = ({ exerciseCounts }: { exerciseCounts: number[] }) => {
  return (
    <p>
      Number of exercises {exerciseCounts.reduce((prev, curr) => prev + curr)}
    </p>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header header={course} />
      <Content
        partsToRender={[
          { title: part1, exerciseCount: exercises1 },
          { title: part2, exerciseCount: exercises2 },
          { title: part3, exerciseCount: exercises3 },
        ]}
      />
      <Total exerciseCounts={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

export default App;
