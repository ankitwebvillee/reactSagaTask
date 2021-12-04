import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Chats from './pages/Chats';

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/chat" element={<Chats />} />
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
