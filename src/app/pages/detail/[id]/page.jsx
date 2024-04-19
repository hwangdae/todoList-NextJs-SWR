'use client'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

const page = ({params}) => {
  console.log(params)
  const param = useParams()
  console.log(param)
  return (
    <div>{params.id}</div>
  )
}

export default page