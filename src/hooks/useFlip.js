import { useState } from "react";

/* a custom hook to flip card */
const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true)
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp)
  }
  return [isFacingUp, flipCard]
}

export default useFlip
