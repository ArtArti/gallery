import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilContact, cilImage, cilNotes, cilPuzzle, cilSpeedometer} from '@coreui/icons'
import {CNavItem, CNavTitle } from '@coreui/react'


const _nav = [
  {
    component: CNavItem,
    name: 'Art_Gallery',
    to:'/',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavItem,
    name: 'Home',
    to: '/',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'About',
    to: 'about',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Contact',
    to: 'contact',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Gallery',
    to: 'gallery',
    icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
  },
]

export default _nav
