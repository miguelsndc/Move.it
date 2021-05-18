import { createContext, ReactNode, useEffect, useState } from 'react'
import challenges from '../../challenges.json'

import { LevelUpModal } from '../components/LevelUpModal'

import { useContext } from 'react'
import useUser from '../hooks/useUser'
import { db } from '../config/firebase'
import { useAuth } from './AuthContext'
import { useRef } from 'react'

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengesContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel: number
  activeChallenge: Challenge
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
  closeLevelUpModal: () => void
}

interface ChallengesProviderProps {
  children: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
  totalExperience: number
}

const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const { user } = useAuth()
  const [level, setLevel] = useState(1)

  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const isFirstFetch = useRef(true)

  const [totalExperience, setTotalExperience] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 6, 2)

  const { userRef } = useUser()

  useEffect(() => {
    db.collection('users')
      .doc(user.uid)
      .get()
      .then((doc) => {
        const {
          level,
          currentExperience,
          totalExperience,
          challengesCompleted,
        } = doc.data()

        setLevel(level)
        setCurrentExperience(currentExperience)
        setTotalExperience(totalExperience)
        setChallengesCompleted(challengesCompleted)
        isFirstFetch.current = false
      })
  }, [])

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    if (!isFirstFetch.current) {
      userRef.update({
        level: level,
      })
    }
  }, [level])

  useEffect(() => {
    if (!isFirstFetch.current) {
      userRef.update({
        totalExperience: totalExperience,
      })
    }
  }, [totalExperience])

  useEffect(() => {
    if (!isFirstFetch.current) {
      userRef.update({
        currentExperience: currentExperience,
      })
    }
  }, [currentExperience])

  useEffect(() => {
    if (!isFirstFetch.current) {
      userRef.update({
        challengesCompleted: challengesCompleted,
      })
    }
  }, [challengesCompleted])

  function levelUp() {
    setLevel((prevLevel) => prevLevel + 1)
    setIsLevelUpModalOpen(true)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}XP!`,
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return
    }
    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setChallengesCompleted(challengesCompleted + 1)
    setTotalExperience(totalExperience + amount)
    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        experienceToNextLevel,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  )
}

export const useChallenges = () => useContext(ChallengesContext)
