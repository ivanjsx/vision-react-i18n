// libraries
import { ChangeEventHandler, FC } from "react";

// styles
import styles from "./input.module.css";

// constants
import { IP_V4_ERROR } from "../../utils/constants";

// content

type Props = Readonly<{
  value: string;
  isValid: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}>;

const Input: FC<Props> = ({ value, isValid, onChange }) => {
  return (
    <input 
      required
      type="text"
      value={value}
      maxLength={15}
      id="ip_address"
      name="ip_address"
      onChange={onChange}
      title={IP_V4_ERROR}
      pattern="^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$"
      placeholder="Enter IP address"
      className={isValid ? styles.input : `${styles.input} ${styles.invalid}`}
    />
  );
};

export default Input;
