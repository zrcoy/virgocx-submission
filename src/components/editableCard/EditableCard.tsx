'use client'

import { Button, ConfigProvider, Radio, Switch } from 'antd'
import { FC, useState } from 'react'
import { EDITABLE_CARD_TITLE } from '../../constants/editableCardConsts'
import { GLOBAL_COLORS } from '../../constants/stylesConsts'
import { TEditableCardProps } from '../../types/card'
import MultiCheckGroup from './MultiCheckRadioGroup'

export const radioBtnStyle = (checked: boolean) => {
  return {
    fontSize: 16,
    color: checked ? '#000000' : GLOBAL_COLORS.text_lighter_grey,
  }
}

const EditableCard: FC<TEditableCardProps> = ({ isProficient, toolsUsed }) => {
  const [isProficientState, setIsProficientState] =
    useState<boolean>(isProficient)
  const [tools, setTools] = useState<string>(toolsUsed)
  const [isEditable, setIsEditable] = useState<boolean>(true)

  const onSwitchChange = (checked: boolean) => {
    setIsEditable(checked)
  }

  const onProficiencyChange = (e: any) => {
    setIsProficientState(e.target.value)
  }

  return (
    <div className="flex flex-col p-9 bg-white gap-12 justify-between">
      {/* switch section */}
      <div className="flex flex-row justify-between">
        <div className="text-base text-vergoHeader2">Editable</div>
        <ConfigProvider
          theme={{
            components: {
              Switch: {
                handleBg: isEditable
                  ? GLOBAL_COLORS.white
                  : GLOBAL_COLORS.primary_dark_purple,
                colorPrimary: GLOBAL_COLORS.primary_dark_purple,
                colorPrimaryBorder: GLOBAL_COLORS.primary_dark_purple,
                handleShadow: '0 0 0 0.01rem #6B47ED',
                colorTextTertiary: '#eeeeee',
              },
            },
          }}
        >
          <Switch defaultChecked onChange={onSwitchChange} />
        </ConfigProvider>
      </div>

      {/* proficient section */}
      <div className="flex flex-col gap-4">
        <div className="text-base font-bold" style={{ fontSize: 18 }}>
          {EDITABLE_CARD_TITLE.proficient}
        </div>
        <Radio.Group
          className="flex flex-col gap-4 text-base"
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
      <div className="flex flex-col gap-4">
        <div className="text-base font-bold" style={{ fontSize: 18 }}>
          {EDITABLE_CARD_TITLE.tools}
        </div>
        <div className="text-base text-subTitle">
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
        <div className="self-center">
          <Button
            className="bg-primaryDarkPurple"
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
              console.log(tools)
            }}
          >
            Process
          </Button>
        </div>
      </ConfigProvider>
    </div>
  )
}

export default EditableCard
