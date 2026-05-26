import { createFileRoute } from '@tanstack/react-router'
import SignUpForm from '../../../features/auth/components/SignUpForm'

export const Route = createFileRoute('/Auth/SignUp')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SignUpForm />
  )
}
