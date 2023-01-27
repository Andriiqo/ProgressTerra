import { ReactNode } from 'react'
import { Header } from '../header'
import { Main } from '../main/ui'
import { Modal } from '../../entities/modal'

export const Layout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Header/>
      <Main children={children}/>
      <Modal/>
    </>
  )
}
