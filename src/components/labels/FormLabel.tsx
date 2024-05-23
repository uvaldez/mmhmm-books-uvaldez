import React from 'react';
interface ILabelProps {
  value: string;
};

export default function FormLabel (props: ILabelProps) {
  const { value } = props;
  return (
      <label className="block mb-2 text-md font-medium text-gray-900" htmlFor={`inline-${value}`}>
        {value}
      </label>
  )
}
