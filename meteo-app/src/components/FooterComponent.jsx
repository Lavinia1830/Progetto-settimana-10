import React from 'react';
import {Container} from 'react-bootstrap';

export default function FooterComponent() {
  return (
    <footer className='fixed-bottom py-3'>
      <Container>
        <p className="text-center text-light m-0">&copy; Lavinia Baratti {new Date().getFullYear()}</p>
      </Container>
        
    </footer>
  )
}
