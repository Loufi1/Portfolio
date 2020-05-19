import React from 'react';
import {Col, Row, Container} from "react-bootstrap";

const FADE_RATIO = 5;

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.opacity = 100;
        this.state = {
            page: 0,
        }
    }
    componentDidMount() {
        window.addEventListener('mousewheel', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('mousewheel', this.handleScroll.bind(this));
    }

    handleScroll(event) {
        if (this.opacity === 0)
            this.setState({page: 1});
        else if (this.state.page !== 0)
            this.setState({page: 0});

        if (event.deltaY > 0 && this.opacity !== 0) {
            this.opacity = this.opacity - FADE_RATIO;
            if (this.state.page === 0)
                document.getElementById("App").style.opacity = this.opacity.toString() + '%';
        } else if (event.deltaY < 0 && this.opacity !== 100) {
            this.opacity = this.opacity + FADE_RATIO;
            if (this.state.page === 0)
                document.getElementById("App").style.opacity = this.opacity.toString() + '%';
        }
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.page === 0
                    ?
                        <div className="background-image" id="App">
                            <Container fluid={true}>
                                <Row className="align-content-center">
                                    <Col className="mx-auto mt-5" style={{textAlign: 'center'}} xs={4}>
                                        <h1 className="title">Louis-Frédéric Fortier</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    :
                        <div className="project-page" style={{opacity: '100%'}}>
                            <Container fluid={true}>
                                <Row className="align-content-center">
                                    <Col className="mx-auto mt-5" style={{textAlign: 'center'}} xs={4}>
                                        <h1 className="title">Loufi</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                }
            </div>
        );
    }
}