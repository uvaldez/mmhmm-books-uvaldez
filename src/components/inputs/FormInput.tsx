import React from 'react';

interface IInputProps {
  type: string;
  placeholder?: string;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
};

export default function FormLabel (props: IInputProps) {
  const { type, placeholder, handleOnChange, value } = props;
  return (
      <input
        className="w-full shadow-sm border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" 
        id={`inline-${value}`} 
        type={type} 
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}/>
  );
};
