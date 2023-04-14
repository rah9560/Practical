import React from 'react'
import "./Week1g.css"
import { Link } from 'react-router-dom'

const Week1 = () => {
  return (
    <div>
         <div className='top'>
            <Link to="/"><button className='btn'>→ Next week</button></Link>
        </div>

        <p className='time'>Timezone:</p>
        <div className='top2'>
            <Link to="/Week1"><button>GMT-5.30</button></Link>
            <button>GMT-7</button>
        </div>

        <div className='main'>
            <div className='main2'>
            <div className='day'>
                <p>Mon</p>
                <p>3/04</p>
            </div>
            <div className='item'>
                Past
            </div>
            </div>

            <div className='main2'>
            <div className='day'>
                <p>Tue</p>
                <p>4/04</p>
            </div>
            <div className='item'>
                Past
            </div>
            </div>

            <div className='main2'>
            <div className='day'>
                <p>Wed</p>
                <p>5/04</p>
            </div>
            <div className='item'>
                Past
            </div>
            </div>

            <div className='main2'>
            <div className='day'>
                <p>Thu</p>
                <p>6/04</p>
            </div>
            <div className='item'>
               Past
            </div>
            </div>

            <div className='main2'>
            <div className='day'>
                <p>Fri</p>
                <p>7/04</p>
            </div>
            <div className='item'>
               Past
            </div>
            </div>
        </div>
    </div>
  )
}

export default Week1