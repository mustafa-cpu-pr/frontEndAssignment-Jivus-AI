import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div className="homepage-bg bg-black text-white min-vh-100 d-flex flex-column">
      <Container className="text-center py-5">
        <Row>
          <Col md={12} className="mb-4">
            <h1 className="display-4 font-weight-bold text-gold">
              Welcome to <span className="text-white">VoiceTranscribe</span>
            </h1>
            <p className="lead text-light">
              Convert your speech into text effortlessly
            </p>
            
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <Card
              className="h-100 shadow-sm border-0"
              style={{ backgroundColor: '#444444' }}
            >
              <Card.Body className="text-center">
                <div className="mb-3">
                  <i
                    className="bi bi-mic-fill text-gold"
                    style={{ fontSize: '3rem' }}
                  ></i>
                </div>
                <Card.Title className="font-weight-bold text-white">
                  Real-time Transcription
                </Card.Title>
                <Card.Text className="text-light">
                  Get live transcriptions of your speech with real-time voice
                  recognition technology.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card
              className="h-100 shadow-sm border-0"
              style={{ backgroundColor: '#444444' }}
            >
              <Card.Body className="text-center">
                <div className="mb-3">
                  <i
                    className="bi bi-check-circle-fill text-gold"
                    style={{ fontSize: '3rem' }}
                  ></i>
                </div>
                <Card.Title className="font-weight-bold text-white">
                  High Accuracy
                </Card.Title>
                <Card.Text className="text-light">
                  Our transcription tool boasts high accuracy, understanding
                  various accents and languages.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card
              className="h-100 shadow-sm border-0"
              style={{ backgroundColor: '#444444' }}
            >
              <Card.Body className="text-center">
                <div className="mb-3">
                  <i
                    className="bi bi-easel-fill text-gold"
                    style={{ fontSize: '3rem' }}
                  ></i>
                </div>
                <Card.Title className="font-weight-bold text-white">
                  Easy to Use
                </Card.Title>
                <Card.Text className="text-light">
                  With a simple interface, start transcribing with a single
                  click on the button above.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      
    </div>
  );
};

export default HomePage;
