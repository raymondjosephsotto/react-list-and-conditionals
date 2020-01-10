import React from 'react'

const char = props => {
  let style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border:'1px solid white'
  }
  return(
    <div style={style} onClick={props.clicked}>
      {props.character}
    </div>
  )
}

export default char;