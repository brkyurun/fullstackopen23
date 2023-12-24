import { ChangeEventHandler } from 'react';

export const Filter = ({
  filterQuery,
  onChange,
}: {
  filterQuery: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div>
      filter shown with:{' '}
      <input type="text" value={filterQuery} onChange={onChange} />
    </div>
  );
};
