import { ChangeEventHandler, FormEventHandler } from 'react';

type FormProps = {
  handleFormSubmit: FormEventHandler<HTMLFormElement>;
  name: string;
  handleNameInput: ChangeEventHandler<HTMLInputElement>;
  phoneNumber: string;
  handlePhoneNumberInput: ChangeEventHandler<HTMLInputElement>;
};

export const Form = ({
  handleFormSubmit,
  name,
  handleNameInput,
  phoneNumber,
  handlePhoneNumberInput,
}: FormProps) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        name: <input type="text" onChange={handleNameInput} value={name} />
      </div>
      <div>
        phone:{' '}
        <input
          type="text"
          onChange={handlePhoneNumberInput}
          value={phoneNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
