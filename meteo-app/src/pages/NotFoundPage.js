import React from 'react'
import {Button, Container} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

export default function NotFoundPage() {

  const navigate = useNavigate();

  return (
    <Container className='my-5 text-center'>
      <h3 className='text-danger'>Sorry, this page does not exist.</h3>
      <Button variant='light' onClick={() => {navigate('/')}}>
        Go Home
      </Button>
    </Container>
  )
}
