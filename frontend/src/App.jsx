import { } from 'react'
import {
  Page
} from './features/portfolio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout, NotFound } from './shared'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Page />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App