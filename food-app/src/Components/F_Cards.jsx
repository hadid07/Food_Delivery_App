import React from 'react'

const F_Cards = (props) => {
  return (
    <div className= 'card m-1 text-dark rounded border border-1 border-dark shadow-lg' style={{backgroundColor:`${props.Color}`,width:'18rem'}}>
        <h2 className='m-3'>{props.Amount}</h2>
        <p className='m-3'>{props.Desc}</p>
    </div>
  )
}

export default F_Cards