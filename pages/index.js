import Head from 'next/head'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux' //ผูกไปยังตัว store.js
import { incrementCounter, decrementCounter } from '../redux/actions/counterActions'

function Home(props) {

  console.log(props);

  return (
    <div>
      <Head>
        <title>NextJS Redux</title>
      </Head>

      <Navbar/>

      <div style={{ textAlign: 'center' }}>
        <h1>Counter: {props.counter}</h1>
        <button onClick={props.incrementCounter}>+ Count up</button> &nbsp;
        <button onClick={props.decrementCounter}>- Count down</button>
      </div>

    </div>
  )
}

//mapStateToProps คือ รับฟังค์ชั่นจาก Store มาใช้งาน
const mapStateToProps = state => ({
  counter: state.counter.value
})

//mapDispathToProps โดยการส่งค่าไปยัง Store เป็น Object
const mapDispathToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
}

export default connect(mapStateToProps, mapDispathToProps)(Home)
