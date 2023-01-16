import { Logout } from '../../../../../firebase/firebase'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { addUser } from '../../../../../features/user/userSlice/userSlice'

import { IconsWrapper, SignInLink, UserDisplayname } from './Icons.styles'
import { Props } from '../types'
import { CiUser } from 'react-icons/ci'
function Icons({ changeMenu }: Props) {
  const user = useAppSelector((stete) => stete.user.user)
  const dispatch = useAppDispatch()

  return (
    <>
      <IconsWrapper>
        {!user ? (
          <SignInLink to='/login'>
            <CiUser />
          </SignInLink>
        ) : (
          <UserDisplayname
            onClick={() => {
              Logout()
              dispatch(addUser(null))
              changeMenu()
            }}
          >
            {user.email}
          </UserDisplayname>
        )}
      </IconsWrapper>
    </>
  )
}

export default Icons
