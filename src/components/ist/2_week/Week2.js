import React from 'react'
import "./Week2.css"
import { Link } from 'react-router-dom'


const Week2 = () => {
  return (
    <>
        <div className='top'>
            <Link to="/Week1" ><button className='btn'>← Previous week</button></Link>
            <p className='date'>April 13,2023</p>
            <Link to="/Week3"><button className='btn'>→ Next week</button></Link>
        </div>

        <p>Timezone:</p>
        <div className='top2'>
            <Link to="/"><button>GMT-5.30</button></Link>
            <Link to="/Week2g"><button>GMT-7</button></Link>
        </div>

        <div className='main'>
            <div className='main2'>
            <div className='day'>
                <p>Mon</p>
                <p>10/04</p>
            </div>
            <div className='item'>
                Past
            </div>
            </div>

            <div className='main2'>
            <div className='day'>
                <p>Tue</p>
                <p>11/04</p>
            </div>
            <div className='item'>
                Past
            </div>
            </div>

            <div className='main2'>
            <div className='day'>
                <p>Wed</p>
                <p>12/04</p>
            </div>
            <div className='item'>
                Past
            </div>
            </div>

            <div className='main2'>
            <div className='day'>
                <p>Thu</p>
                <p>13/04</p>
            </div>
            <div className='item1'>
            <div>
                     <input type='checkbox'/>8:00
                    <input type='checkbox'/>8:30
                    <input type='checkbox'/>9:00
                    <input type='checkbox'/>9:30
                    <input type='checkbox'/>10:00
                    <input type='checkbox'/>10:30
                    <input type='checkbox'/>11:00
                    <input type='checkbox'/>11:30
                </div>
                <div>
                    <input type='checkbox'/>12:00
                    <input type='checkbox'/>12:30
                    <input type='checkbox'/>1:00
                    <input type='checkbox'/>1:30
                    <input type='checkbox'/>2:00
                    <input type='checkbox'/>2:30
                    <input type='checkbox'/>3:00
                    <input type='checkbox'/>3:30
                    <input type='checkbox'/>4:00
                    <input type='checkbox'/>4:30
                    <input type='checkbox'/>5:00
                </div>
                <div>
                     <input type='checkbox'/>5:30
                     <input type='checkbox'/>6:00
                     <input type='checkbox'/>6:30
                     <input type='checkbox'/>7:00
                     <input type='checkbox'/>7:30
                     <input type='checkbox'/>8:00
                     <input type='checkbox'/>8:30
                     <input type='checkbox'/>9:00
                     <input type='checkbox'/>9:30
                </div>
            </div>
            </div>

            <div className='main2'>
            <div className='day'>
                <p>Fri</p>
                <p>14/04</p>
            </div>
            <div className='item1'>
            <div>
                     <input type='checkbox'/>8:00
                    <input type='checkbox'/>8:30
                    <input type='checkbox'/>9:00
                    <input type='checkbox'/>9:30
                    <input type='checkbox'/>10:00
                    <input type='checkbox'/>10:30
                    <input type='checkbox'/>11:00
                    <input type='checkbox'/>11:30
                </div>
                <div>
                    <input type='checkbox'/>12:00
                    <input type='checkbox'/>12:30
                    <input type='checkbox'/>1:00
                    <input type='checkbox'/>1:30
                    <input type='checkbox'/>2:00
                    <input type='checkbox'/>2:30
                    <input type='checkbox'/>3:00
                    <input type='checkbox'/>3:30
                    <input type='checkbox'/>4:00
                    <input type='checkbox'/>4:30
                    <input type='checkbox'/>5:00
                </div>
                <div>
                     <input type='checkbox'/>5:30
                     <input type='checkbox'/>6:00
                     <input type='checkbox'/>6:30
                     <input type='checkbox'/>7:00
                     <input type='checkbox'/>7:30
                     <input type='checkbox'/>8:00
                     <input type='checkbox'/>8:30
                     <input type='checkbox'/>9:00
                     <input type='checkbox'/>9:30
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Week2