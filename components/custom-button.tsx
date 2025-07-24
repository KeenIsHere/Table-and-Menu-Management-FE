"use client"

interface CustomButtonProps {
  name: string
  onPress: () => void
  disabled?: boolean
}

export default function CustomButton({ name, onPress, disabled = false }: CustomButtonProps) {
  return (
    <button className={`custom-button ${disabled ? "disabled" : ""}`} onClick={onPress} disabled={disabled}>
      {name}
    </button>
  )
}
