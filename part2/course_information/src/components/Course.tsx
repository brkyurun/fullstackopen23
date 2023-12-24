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
      <strong>
        total of {exerciseCounts.reduce((prev, curr) => prev + curr)} exercises
      </strong>
    </p>
  );
};

export const Course = ({ course }: CourseProps) => {
  return (
    <div>
      <Header header={course.name} />
      <Content partsToRender={course.parts} />
      <Total exerciseCounts={course.parts.map((part) => part.exercises)} />
    </div>
  );
};
