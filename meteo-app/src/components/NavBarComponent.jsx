import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBarComponent() {
  return (
    <header>
      <Navbar expand="lg">
        <Container fluid className='d-flex justify-content-center'>
          <Link to="/"><img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" width="100" alt="Logo OpenWeather"/></Link>
        </Container>
      </Navbar>
    </header>
    
  )
}
