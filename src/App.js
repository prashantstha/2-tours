import React, { useState, useEffect } from 'react';
import './scss/App.scss';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Tours from './Tours';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
const apiURL = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(apiURL);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }   
    
  }

  useEffect( () => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <div className="App">
        <Container>
          <Spinner animation="border" />
        </Container>
      </div>
    );
  }

  if (tours.length == 0 ) {
    return (
      <div className="App">
        <section className='section-tours'>
          <Alert variant="danger">
            <Alert.Heading>No Tours Left</Alert.Heading>
            <Button variant="primary" onClick={() => fetchTours()}>Refresh</Button>
          </Alert>
        </section>
    </div>
    );
  }

  return (
    <div className="App">
      <Container>
        <Tours tours={tours} removeTour={removeTour} />
      </Container>
    </div>
  );
}

export default App;
