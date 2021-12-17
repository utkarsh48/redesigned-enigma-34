import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
