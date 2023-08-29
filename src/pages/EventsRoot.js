import React from 'react'
import EventNavigation from '../components/EventsNavigation'
import { Outlet } from 'react-router-dom'
const EventsRoot = () => {
  return (
    <>
    <EventNavigation/>
    <Outlet />
    </>
  )
}

export default EventsRoot