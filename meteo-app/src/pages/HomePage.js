import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import CityCard from '../components/CityCard';

export default function HomePage() {

  /* const [nation, setNation] = useState('');
  const [state_region, setStateRegion] = useState('');
  const [common, setCommon] = useState('');
  const [province, setProvince] = useState(''); */
  const [city, setCity] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [cityName, setCityName] = useState('');
  const [isError, setError] = useState(false);

  const findCityCoordinates = async () => {
    try{
      let response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=016e77ff7965589b3878a445f18ac1ae`)
      if(response.ok){
        let data = await response.json();
        console.log('Città trovate dopo inpot:', data);
        console.log(data[0]);
        let cityObj = data[0];
        console.log('cityObj', cityObj);
        let cityObjLat = cityObj.lat.toString();
        let cityObjLon = cityObj.lon.toString();
        let cityObjName = cityObj.name;
        console.log('cisyObjName', cityObjName);
        console.log('latitudine', cityObjLat);
        console.log('longitudine', cityObjLon);
        setLat(cityObjLat);
        setLon(cityObjLon);
        setCityName(cityObjName);
        setError(false);
      }
      else {
        setError(true);
        return console.log('Errore nella fatch', response.status);
      }
    }
    catch(err){
      setError(true);
      console.log(err)
    }
  }




  return (
    <>
      <Container className='py-5' id="homeContainer">
        <Form className="d-flex" id='searchBar' onSubmit={
          (e) => {
            e.preventDefault();
            findCityCoordinates();
            setCity('');
          }
        }>
          <Form.Control 
            type="search" 
            placeholder="Search city..." 
            className='me-2'
            aria-label='Search'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            id="inputSeatch"
          />
          <Button type='submit' variant="light"><i class="bi bi-search fs-5"></i></Button>
        </Form>
        {isError && <Alert variant='danger' className='my-5'>Can't find the city! Try anther one</Alert>}
        {
          lat && lon && (
            <CityCard city={cityName} lat={lat} lon={lon}/>
          )
        }
      </Container>
    </>
  )
}
