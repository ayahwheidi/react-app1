import React from 'react'

export default function Product(props) {
  return (
    <>
<div className="col-md-4">
       
       <h2>{props.title}</h2>
       <p> {props.desc}</p>
      <p>{props.price}</p>
      </div>

    </>
  )
}
