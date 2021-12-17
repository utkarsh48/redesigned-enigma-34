import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from './components/LoginPage';


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
