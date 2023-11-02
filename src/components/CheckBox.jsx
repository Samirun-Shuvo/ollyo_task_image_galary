/* eslint-disable react/prop-types */
export default function CheckBox(props) {
  const { className = "", checked, name, onChange } = props;
  return (
    <input
      className={"cursor-pointer text-lg w-[24px] h-[24px] " + className}
      type="checkbox"
      checked={checked ? true : false}
      name={name ? name : "custom_checkbox"}
      onChange={onChange ? onChange : () => {}}
    />
  );
}
