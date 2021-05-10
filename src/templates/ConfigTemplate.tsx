import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { db } from '../config/firebase'
import { useAuth } from '../contexts/AuthContext'
import { Container, SignoutBtn, Form, Warning } from '../styles/Config'

interface ConfigProps {
  name: string
  photoURL: string
  signOut: () => void
}

export default function ConfigTemplate({
  name,
  photoURL,
  signOut,
}: ConfigProps) {
  const { register, handleSubmit } = useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const { user } = useAuth()

  function nameUpdate({ newName }) {
    db.collection('users').doc(user.uid).update({
      name: newName,
    })
    showModal('Seu nome foi alterado com sucesso')
  }

  function photoUpdate({ newPhoto }) {
    db.collection('users').doc(user.uid).update({
      photoURL: newPhoto,
    })
    showModal('Sua foto foi alterada com sucesso')
  }

  function showModal(message: string) {
    setModalMessage(message)
    setIsModalOpen(true)
    setTimeout(() => {
      setIsModalOpen(false)
    }, 3000)
  }

  return (
    <Container>
      {isModalOpen && <Warning>{modalMessage}</Warning>}
      <div>
        <img src={photoURL ? photoURL : '/diver.svg'} alt={name} />
        <h3>{name}</h3>
        <Form onSubmit={handleSubmit(nameUpdate)}>
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            name="name"
            {...register('newName', { maxLength: 16 })}
          />
          <button type="submit">Save</button>
        </Form>
        <Form onSubmit={handleSubmit(photoUpdate)}>
          <label htmlFor="photoURL">Photo URL</label>
          <input type="text" name="photoURL" {...register('newPhoto')} />
          <button type="submit">Save</button>
        </Form>
        <SignoutBtn onClick={signOut}>Sair</SignoutBtn>
      </div>
    </Container>
  )
}
