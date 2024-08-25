type Props = {
  label: string;
  name: string;
};
const InputLabel = ({ label, name }: Props) => {
  return (
    <label
      className="gap-2 w-fit text-md flex items-start cursor-pointer font-medium"
      htmlFor={name}
    >
      {label}
      <span className="text-medium-green">*</span>
    </label>
  );
};

export default InputLabel;
