import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/SignIn')({
  component: SignIn,
})

function SignIn() {
  return <div> <h1>Hello "/SignIn"!</h1></div>
}
