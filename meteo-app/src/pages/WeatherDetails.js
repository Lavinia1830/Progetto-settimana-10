import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export default function WeatherDetails() {

  const navigate = useNavigate();

  return (
      <Container className='my-5 text-center'>
          <h3 className='text-black'>🛠️ STILL UNDER MAINTENANCE 🛠️ </h3>
          <Button variant="light" onClick={() => {
              navigate('/')
          }}>Go Home</Button>
      </Container>
  )
}