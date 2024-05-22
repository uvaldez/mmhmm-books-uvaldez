type labelProps = {
  value: string;
};

export default function FormLabel (props: labelProps) {
  const { value } = props;
  return (
      <label className="block mb-2 text-md font-medium text-gray-900" htmlFor={`inline-${value}`}>
        {value}
      </label>
  )
}
