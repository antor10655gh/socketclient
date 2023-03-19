import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { SocketProvider } from './providers/Socket';

function App() {
  return (
    <>
      <SocketProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </SocketProvider>
    </>
  );
}

export default App;
