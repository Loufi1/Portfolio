import React from 'react';
import {Col, Row, Container} from "react-bootstrap";

const FADE_RATIO = 5;

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            opacity_1: 100,
        }
    }
    componentDidMount() {
        window.addEventListener('mousewheel', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('mousewheel', this.handleScroll.bind(this));
    }

    handleScroll(event) {
        if (this.state.opacity_1 === 0)
            this.setState({page: 1});
        else if (this.state.page !== 0)
            this.setState({page: 0});

        if (event.deltaY > 0 && this.state.opacity_1 !== 0) {
            this.setState({opacity_1: this.state.opacity_1 - FADE_RATIO});
        } else if (event.deltaY < 0 && this.state.opacity_1 !== 100) {
            this.setState({opacity_1: this.state.opacity_1 + FADE_RATIO});
        }
    }

    render() {
        console.log(this.state.opacity_1);
        return (
            <div className="App">
                {
                    this.state.page === 0
                    ?
                        <div className="background-image" id="App" style={{opacity: this.state.opacity_1 + '%'}}>
                            <Container fluid={true}>
                                <Row className="align-content-center">
                                    <Col className="mx-auto mt-5" style={{textAlign: 'center'}} xs={4}>
                                        <h1 className="title">Louis-Frédéric Fortier</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    :
                        <div className="project-page">
                            <Container fluid={true}>
                                <Row className="align-content-center">
                                    <Col className="mx-auto mt-5" style={{textAlign: 'center'}} xs={4}>
                                        <h1 className="title">Projects</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                }
            </div>
        );
    }
}