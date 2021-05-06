import { useCountdown } from '../../contexts/CountdownContext'

import {
  CountdownButton,
  CountdownButtonActive,
  CountdownContainer,
} from './styles'

export function Countdown() {
  const {
    hasFinished,
    isActive,
    minutes,
    seconds,
    resetCountDown,
    startCountDown,
  } = useCountdown()

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      {hasFinished ? (
        <CountdownButton disabled>Ciclo encerrado</CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButtonActive onClick={resetCountDown}>
              Abandonar ciclo
            </CountdownButtonActive>
          ) : (
            <CountdownButton onClick={startCountDown}>
              Iniciar ciclo
            </CountdownButton>
          )}
        </>
      )}
    </div>
  )
}
