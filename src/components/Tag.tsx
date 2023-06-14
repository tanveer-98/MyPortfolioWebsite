import React from 'react'
interface ITag{
    name : string;
    color : string;
}
const Tag = (props : ITag) => {
  return (
    <div className={` ${props.color} px-2 rounded-lg bg-gradient-to-r `}>#{props.name}</div>
  )
}

export default Tag