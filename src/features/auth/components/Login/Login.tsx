import React from 'react'
import {
  FieldWrap,
  Form,
  FormWrapper,
  Input,
  Label,
  LoginRef,
  LoginRefText,
  SignInContainer,
  SignInWrapper,
  SubmitButton,
} from './Login.styles'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signinUserEmailAndPassword,
} from '../../../../firebase/firebase'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FirebaseError } from 'firebase/app'

const defaultFormFields = {
  email: '',
  password: '',
}

function LoginPage() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const navigate = useNavigate()

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
    navigate('/')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    try {
      await signinUserEmailAndPassword(email, password)
      setFormFields(defaultFormFields)
      navigate('/')
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/wrong-password':
            alert('Wrong Password')
            break
          case 'auth/user-not-found':
            alert('User does not exists')
            break
          default:
            console.log(error)
        }
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignInWrapper>
      <SignInContainer>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <FieldWrap>
              <Label>Email Address*</Label>
              <Input
                type='email'
                required
                name='email'
                value={email}
                onChange={handleChange}
              />
            </FieldWrap>

            <FieldWrap>
              <Label>Password*</Label>
              <Input
                type='password'
                required
                name='password'
                value={password}
                onChange={handleChange}
              />
            </FieldWrap>

            <SubmitButton type='submit'>Login</SubmitButton>
            <LoginRefText>
              Create account <LoginRef to='/signin'>here</LoginRef>
            </LoginRefText>
          </Form>
        </FormWrapper>
        <SubmitButton type='button' onClick={logGoogleUser}>
          Sign in with Google
        </SubmitButton>
      </SignInContainer>
    </SignInWrapper>
  )
}

export default LoginPage
