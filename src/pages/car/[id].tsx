import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const CarPage: NextPage = () => {
    const {push, replace} = useRouter()
  return (
    <div><button onClick={() => push('/car/2')}>go home</button></div>
  )
}

export default CarPage