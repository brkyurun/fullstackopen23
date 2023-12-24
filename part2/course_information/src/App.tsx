import { ComponentPropsWithoutRef } from 'react';

type CourseProps = {
  course: {
    id: number;
    name: string;
    parts: {
      name: string;
      exercises: number;
      id: number;
    }[];
  };
};
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

const Course = ({ course }: CourseProps) => {
  return (
    <div>
      <Header header={course.name} />
      <Content partsToRender={course.parts} />
      <Total exerciseCounts={course.parts.map((part) => part.exercises)} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
