import { createFileRoute, Navigate } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Index,
})

export default function Index() {
  const [isLogged] = useState(true);

  return isLogged? (<h1> Home</h1>) : (<Navigate to='/Auth/SignIn' />)
}
