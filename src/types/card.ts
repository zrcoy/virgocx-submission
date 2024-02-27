export type TQuestionProps = {
  title: string
  subTitle?: string
  isMultipleChoice: boolean
  options: string[]
}

export type TEditableCardProps = {
  isProficient: boolean
  toolsUsed: string
}

export type TCustomizedRadioBtnProps = {
  key?: string
  value: any
  checked: boolean
  onClick?: (e: any) => void
  label: string
  isEditable: boolean
}

export type TMultiCheckRadioGroupProps = {
  isEditable: boolean
  toolsUsed: string
  setTools: (arg: string) => void
}
