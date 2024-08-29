type Props = {
  label: string;
  hideStar?: boolean;
  name: string;
};
const InputLabel = ({ label, name, hideStar = false }: Props) => {
  return (
    <label
      className="gap-2 w-fit text-md flex items-start cursor-pointer font-medium"
      htmlFor={name}
    >
      {label}
      {!hideStar && <span className="text-medium-green">*</span>}
    </label>
  );
};

export default InputLabel;
