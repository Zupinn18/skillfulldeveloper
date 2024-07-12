import './App.css'
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import RefundForm from "./components/Refund/RefundForm";

function App() {
  return (
    <div className="w-[100%] h-full" >
        <Routes>
          <Route path="/" element={
              <Homepage/>
            }/>
            <Route path="/refund" element={
              <RefundForm/>
            }/>
        </Routes>
    </div>
  )
}

export default App
