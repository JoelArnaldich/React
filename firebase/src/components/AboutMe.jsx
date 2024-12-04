// AboutMe.js
import React from 'react';
import { Container, Row, Col, Button, CardImgOverlay } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

function AboutMe() {
    return (
        <Container className="mt-5">
            <Row className="align-items-center justify-content-center">
                <Col md={4}>
                    <Image src="/Joel Arnaldich Bernadó.png" fluid rounded />
                </Col>
                <Col md={8}>
                    <h2>Sobre Mi</h2>
                    <p>
                        Hola me dic Joel i aquest es el meu blog
                    </p>
                    <p>links:</p>
                    <Stack gap={3}>
    
                        <Button href='https://www.linkedin.com/in/joel-arnaldich-b00671299/' target='_blank' variant='outline-secondary'>Linkedin</Button>
                        <Button href='https://github.com/JoelArnaldich' target='_blank' variant='outline-secondary'>GitHub</Button>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;

