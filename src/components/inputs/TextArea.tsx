import React from 'react';
interface IInputProps {
  handleOnChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
};

export default function FormLabel (props: IInputProps) {
  const { handleOnChange, value } = props;
  return (
      <textarea
        className="w-full shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" 
        name={value}
        id={`inline-${value}`} 
        rows={4} cols={50}
        onChange={handleOnChange}
        value={value}/>
  );
};
