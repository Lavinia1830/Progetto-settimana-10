//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

//Components
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBarComponent from './components/NavBarComponent';
import HomePage from './pages/HomePage';
import WeatherDetails from './pages/WeatherDetails';
import NotFoundPage from './pages/NotFoundPage';
import FooterComponent from './components/FooterComponent';



function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/details/:id" element={<WeatherDetails />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </Container>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
