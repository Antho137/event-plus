import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter basename="/event-plus/">
      <Routes>
          <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
