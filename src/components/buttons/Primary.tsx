type propsType = {
  label: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  handleOnClick?: () => void;
}

export default function PrimaryButton (props: propsType) {
  const { label, type, handleOnClick } = props;
  return (
      <button
        onClick={handleOnClick}
        type={type}
        className="btn-primary text-white bg-green font-medium rounded-lg text-sm h-12 px-5 py-2.5 me-2 mb-2">
        {label}
      </button>
  )
}
