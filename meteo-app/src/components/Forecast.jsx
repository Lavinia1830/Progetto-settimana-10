import React, { useEffect, useState } from 'react'
import { Spinner, Card, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function Forecast(props) {

    const [forecast, setForecast] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const findForecast = async () => {
        try {
            let response = await fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${props.cityObj.coord.lat}&lon=${props.cityObj.coord.lon}&appid=016e77ff7965589b3878a445f18ac1ae`);
            if(response.ok){
                let data = await response.json();
                console.log('ecco i dati che ho trovato:', data);
                setForecast(data);
                setLoading(false);
            }
            else {
                setLoading(false);
                return console.log('Errore durante il recupero dati', response.status);
            }
        }
        catch(err){
            console.log(err);
        }
    }

    const unixToDate = (unix) => {
        const milliseconds = unix * 1000;
        const dataObject = new Date(milliseconds);
        const humanDateFormt = dataObject.toLocaleDateString();
        return humanDateFormt;
    }

    useEffect(() => {
        findForecast();
    }, [props.cityObj.coord.lat, props.cityObj.coord.lon]);

  return (
    <>
        <h2 className='my-4 text-black'>New 5 days / 3 hour forecast in {props.cityObj.name}:</h2>
        {isLoading &&(
            <div className='text-center my-5'>
                <Spinner animation='border' role="status" variant="light">
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            </div>
        )}
        {forecast && (
            forecast.list.map((day, index) => {
                return(
                    <Link to={'/details/' + index} className="text-decoration-none" key={index}>
                        <Card className='my-3 p-2 shadow'>
                            <Row>
                                <Col xs={4} md={3}>
                                    <Card.Img variant='top' src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>
                                </Col>
                                <Col xs={8} md={9} className="d-flex align-items-center">
                                    <Card.Body className='p-0'>
                                        <p className='m-0'>{unixToDate(day.dt)}</p>
                                        <p className='fs-1 fw-bold m-0'>{Math.round(day.main.temp - 275.15)} °C</p>
                                        <p className='m-0'>{day.weather[0].description}</p>
                                    </Card.Body>

                                </Col>
                            </Row>
                        </Card>
                    </Link>
                )
            })
        )}
    </>
  )
}
