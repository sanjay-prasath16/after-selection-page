import { BrowserRouter, Routes, Route } from "react-router-dom";
import AfterSelection from "./Pages/afterSelection";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AfterSelection />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;