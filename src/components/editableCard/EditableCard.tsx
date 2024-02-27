"use client";

import { FC, useState } from "react";
import styles from "./EditableCard.module.css";
import { TEditableCardProps } from "../../types/card";
import { Switch, Radio, Button, ConfigProvider } from "antd";
import { EDITABLE_CARD_TITLE } from "../../constants/editableCardConsts";
import { GLOBAL_COLORS } from "../../constants/stylesConsts";
import MultiCheckGroup from "./MultiCheckRadioGroup";

export const radioBtnStyle = (checked: boolean) => {
  return {
    fontSize: 16,
    color: checked ? "#000000" : GLOBAL_COLORS.text_lighter_grey,
  };
};

const EditableCard: FC<TEditableCardProps> = ({ isProficient, toolsUsed }) => {
  const [isProficientState, setIsProficientState] =
    useState<boolean>(isProficient);
  const [tools, setTools] = useState<string>(toolsUsed);
  const [isEditable, setIsEditable] = useState<boolean>(true);

  const onSwitchChange = (checked: boolean) => {
    setIsEditable(checked);
    if (!checked) {
    }
  };

  const onProficiencyChange = (e: any) => {
    setIsProficientState(e.target.value);
  };

  return (
    <div className={styles.editableCardContainer}>
      {/* switch section */}
      <div className={styles.editableCardSwitch}>
        <div
          className={styles.editableCardSwitchText}
          style={{ color: GLOBAL_COLORS.text_dark_grey }}
        >
          Editable
        </div>
        <Switch defaultChecked onChange={onSwitchChange} />
      </div>

      {/* proficient section */}
      <div className={styles.editableCardQuestion}>
        <div className={styles.editableCardTitle}>
          {EDITABLE_CARD_TITLE.proficient}
        </div>
        <Radio.Group
          className={styles.editableCardAnswer}
          onChange={onProficiencyChange}
          value={isProficientState}
          size="large"
        >
          <Radio
            disabled={!isEditable}
            value={false}
            checked={!isProficientState}
            style={radioBtnStyle(!isProficientState)}
          >
            No
          </Radio>
          <Radio
            disabled={!isEditable}
            value={true}
            checked={isProficientState}
            style={radioBtnStyle(isProficientState)}
          >
            Yes
          </Radio>
        </Radio.Group>
      </div>

      {/* tools used section */}
      <div className={styles.editableCardQuestion}>
        <div className={styles.editableCardTitle}>
          {EDITABLE_CARD_TITLE.tools}
        </div>
        <div
          style={{ color: GLOBAL_COLORS.text_light_grey }}
          className={styles.editableCardSubtitle}
        >
          {EDITABLE_CARD_TITLE.tools_subtitle}
        </div>
        <MultiCheckGroup
          isEditable={isEditable}
          toolsUsed={tools}
          setTools={setTools}
        />
      </div>

      {/* Process Button */}
      <ConfigProvider
        theme={{
          token: {
            colorBgContainerDisabled: GLOBAL_COLORS.disabled_dark_purple,
            colorTextDisabled: GLOBAL_COLORS.white,
          },
        }}
      >
        <div className={styles.editableCardProcessBtn}>
          <Button
            disabled={!isEditable}
            style={{
              borderRadius: 80,
              width: 200,
              height: 57,
              fontSize: 18,
              // semi-bold for 600 fw as approximation
              fontWeight: 600,
            }}
            size="large"
            type="primary"
            onClick={() => {
              console.log(tools);
            }}
          >
            Process
          </Button>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default EditableCard;
