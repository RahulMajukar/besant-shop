import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Navbar className="bg-body-tertiary" fixed="bottom">
                <Container>
                    <Navbar.Brand href="#home">Copy right @Besant Technologies</Navbar.Brand>
                </Container>
            </Navbar>
        </footer>
    )
}

export default Footer