import React from 'react'
interface ITag{
    name : string;
    color : string;
}
const Tag = (props : ITag) => {
  return (
    <div className={`  px-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}>{props.name}</div>
  )
}

export default Tag