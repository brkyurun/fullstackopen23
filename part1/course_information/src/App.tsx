import { ComponentPropsWithoutRef } from 'react';

const Header = ({ header }: { header: string }) => {
  return <h1>{header}</h1>;
};

const Part = ({ name, exercises }: { name: string; exercises: number }) => {
  return (
    <p>
      {name} {exercises}
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
        <Part key={part.name} name={part.name} exercises={part.exercises} />
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return (
    <div>
      <Header header={course} />
      <Content partsToRender={[part1, part2, part3]} />
      <Total
        exerciseCounts={[part1.exercises, part2.exercises, part3.exercises]}
      />
    </div>
  );
};

export default App;
