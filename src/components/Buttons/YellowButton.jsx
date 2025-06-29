import React from 'react'
import { Link } from 'react-router-dom'

function YellowButton({text,path,icon,flex}) {
  return (
    <>
       <Link to={path} className={`py-3.5 px-5 rounded-full bg-yellow-50 flex justify-center items-center gap-1.5 text-sm font-semibold text-gray-15 ${flex?"w-1/2":"w-fit"}`}>
      {icon && <span>{icon}</span>}
      <span>{text}</span>
      </Link>
    </>
  )
}

export default YellowButton
