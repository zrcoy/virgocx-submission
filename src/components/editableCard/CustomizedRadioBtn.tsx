import React, { FC } from "react";
import { Radio } from "antd";
import { GLOBAL_COLORS } from "../../constants/stylesConsts";
import { TCustomizedRadioBtnProps } from "../../types/card";

const CustomizedRadioBtn: FC<TCustomizedRadioBtnProps> = ({
  key,
  value,
  checked,
  onClick,
  label,
  isEditable,
}) => {
  return (
    <Radio
      disabled={!isEditable}
      key={key}
      value={value}
      checked={checked}
      onClick={onClick}
      style={{
        fontSize: 16,
        color: checked ? "#000000" : GLOBAL_COLORS.text_lighter_grey,
      }}
    >
      {label}
    </Radio>
  );
};

export default CustomizedRadioBtn;
