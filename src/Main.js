import React from 'react'
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import Week1 from './components/ist/1_week/Week1'
import Week2 from './components/ist/2_week/Week2'
import Week3 from './components/ist/3_week/Week3'
import Week1g from './components/gmt/1_week/Week1g'
import Week2g from './components/gmt/2_week/Week2g'
import Week3g from './components/gmt/3_week/Week3g'

const Main = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
            <Route path='/Week1'element={<Week1/>} >
            </Route>
          <Route path='/'element={<Week2/>}>
          </Route>
          <Route path='/Week3'element={<Week3/>}>
          </Route>
          <Route path='/Week1g'element={<Week1g/>} >
            </Route>
          <Route path='/Week2g'element={<Week2g/>}>
          </Route>
          <Route path='/Week3g'element={<Week3g/>}>
          </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default Main