import React, { useEffect, useState } from 'react';
import { Alert, Spinner, Card, Row, Col} from 'react-bootstrap';
import Forecast from './Forecast';

export default function CityCard(props) {

    const [cityWeather, setCityWeather] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    const findCityWeatherInfo = async () => {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=cfe6d20a473b39d3713d15795c315e84`);
            if (response.ok) {
                let data = await response.json();
                console.log(`Weather info for ${props.city}:`, data);
                setCityWeather(data);
                console.log(cityWeather);
                setLoading(false);
                setError(false);
            }else {
                setError(true);
                setLoading(false);
                return new Error("City not found");
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        console.log('Sono useEffect! (componentDidUpdate)');
        findCityWeatherInfo();

    }, [props.lat, props.lon]);



    return (
        <>
            {isLoading && (
                <div className="text-center my-5">
                    <Spinner animation="border" role="status" variant="light">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}

            {isError && (
                <Alert variant="danger" className='my-5'>Can't find the city!</Alert>
            )}

            {cityWeather && (
                <>
                    <Card className='my-5 p-3 shadow'>
                        <Row>

                            <Col md={6} className='text-center'>
                                <h2 className='fw-bold'>{props.city.toUpperCase()}</h2>
                                <Row className='align-items-center'>
                                    <Col xs={6}>
                                        <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`} />
                                    </Col>
                                    <Col xs={6}>
                                        <p className='fs-1 fw-bold m-0'>{Math.round(cityWeather.main.temp - 275.15)} °C</p>
                                        <p className='m-0'>{cityWeather.weather[0].main}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className='m-0'>{cityWeather.weather[0].description}</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className='d-flex align-items-center'>
                                <Card.Body>
                                    <Row xs={3}>
                                        <Col className='my-2 p-0'>
                                            <p className='fw-bold m-0'>Feels Like:</p>
                                            <p className='m-0'>{Math.round(cityWeather.main.temp - 275.15)} °C</p>
                                        </Col>
                                        <Col className='my-2 p-0'>
                                            <p className='fw-bold m-0'>Temp. Min:</p>
                                            <p className='m-0'>{Math.round(cityWeather.main.temp_min - 275.15)} °C</p>
                                        </Col>
                                        <Col className='my-2 p-0'>
                                            <p className='fw-bold m-0'>Temp. Max:</p>
                                            <p className='m-0'>{Math.round(cityWeather.main.temp_max - 275.15)} °C</p>
                                        </Col>
                                        <Col className='my-2 p-0'>
                                            <p className='fw-bold m-0'>Pressure:</p>
                                            <p className='m-0'>{cityWeather.main.pressure}</p>
                                        </Col>
                                        <Col className='my-2 p-0'>
                                            <p className='fw-bold m-0'>Umidity:</p>
                                            <p className='m-0'>{cityWeather.main.humidity} %</p>
                                        </Col>
                                        <Col className='my-2 p-0'>
                                            <p className='fw-bold m-0'>Wind:</p>
                                            <p className='m-0'>{cityWeather.wind.speed} m/s</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                    <Forecast cityObj={cityWeather} />
                </>)
            }
        </>
    );
}