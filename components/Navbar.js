import React from 'react'
import { connect } from 'react-redux' //ผูกไปยังตัว store.js

function Navbar(props) {
  return (
    <div style={{ background: 'green', color: 'white', textAlign: 'right ' }}>
      <h1>Counter top: {props.counter}</h1>
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter.value
})

export default connect(mapStateToProps)(Navbar)
