import React from 'react';
import {Col, Row, Container} from "react-bootstrap";
import Card from "react-bootstrap/Card";

const FADE_RATIO = 5;

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            opacity: 100,
            opacity_1: 100,
            opacity_2: 100,
            is_mobile: window.innerWidth < 600,
        };
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
        else if (this.state.opacity_2 === 0)
            this.setState({page: 2});
        else if (this.state.page !== 0)
            this.setState({page: 0});

        if (event.deltaX === -0 && this.state.opacity_2 === 100) {
            if (event.deltaY > 0 && this.state.opacity_1 !== 0) {
                this.setState({
                    opacity_1: this.state.opacity_1 - FADE_RATIO,
                    opacity: this.state.opacity - FADE_RATIO,
                });
            } else if (event.deltaY < 0 && this.state.opacity_1 !== 100) {
                this.setState({
                    opacity_1: this.state.opacity_1 + FADE_RATIO,
                    opacity: this.state.opacity + FADE_RATIO,
                });
            }
        } else if (event.deltaY === -0 && this.state.opacity_1 === 100) {
            this.setState({opacity_1: 100});

            if (event.deltaX > 0 && this.state.opacity_2 !== 0) {
                this.setState({
                    opacity_2: this.state.opacity_2 - FADE_RATIO,
                    opacity: this.state.opacity - FADE_RATIO,
                });
            } else if (event.deltaX < 0 && this.state.opacity_2 !== 100) {
                this.setState({
                    opacity_2: this.state.opacity_2 + FADE_RATIO,
                    opacity: this.state.opacity + FADE_RATIO,
                });
            }
        }
    }

    gotoProjects() {
        this.setState({
            page: 1,
            opacity_1: 0,
        });
    }

    render() {
        return (
            <>
            {
                this.state.page === 0
                ?
                    <div className="main-page" style={{ opacity: `${this.state.opacity}%` }}>
                        <Container fluid={true}>
                            <Row className="mt-2">
                                <Col>
                                    <h1>Portfolio</h1>
                                </Col>
                            </Row>
                            <Row className="mt-5 ml-5">
                                <Col className="text-center mt-5" xs={6}>
                                    <p>
                                        Hello, I am <br/>
                                        <span className='name'>Louis-Frédéric</span> <br/>
                                        a web and mobile fullstack developer
                                    </p>
                                </Col>
                            </Row>
                            <Row className="mt-5 ml-5">
                                <Col className="text-center" xs={6}>
                                    <img alt={''} src={require('../../assets/github.png')} height={75} className="mr-3 medias"/>
                                    <img alt={''} src={require('../../assets/linkedin.png')} height={75} className="ml-3 medias"/>
                                </Col>
                            </Row>
                            <img style={{ right: 40, bottom: 50, position: 'absolute'}} src={require("../../assets/code.svg")} alt={''} height={window.innerWidth / 3} />
                        </Container>
                    </div>
                :
                    this.state.page === 1
                ?
                    <div className="project-page">
                        <Container fluid={true}>
                            <Row className="mt-2">
                                <Col>
                                    <h1>Projects</h1>
                                </Col>
                            </Row>
                            <Row className="mt-5 ml-2 row-table">
                                <Col className="text-center mt-5 projects row-cell" xs={3}>
                                    <Card style={{height: '100%'}}>
                                        <Card.Header as="h5">Buzzle</Card.Header>
                                        <Card.Body>
                                            <Card.Title>
                                                <Container fluid={true}>
                                                    <Row>
                                                        <Col>
                                                            <img alt={''} src={require('../../assets/Buzzle.png')} height={75}/>
                                                        </Col>
                                                        <Col>
                                                            <span className='project-description'>
                                                                Buzzle is an intelligent alarm who handle traffic disruption.
                                                            </span>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center mt-5 projects row-cell" xs={3}>
                                    <Card style={{height: '100%'}}>
                                        <Card.Header as="h5">Area</Card.Header>
                                        <Card.Body>
                                            <Card.Title>
                                                <Container fluid={true}>
                                                    <Row>
                                                        <Col>
                                                            <img alt={''} src={require('../../assets/area.png')} height={75}/>
                                                        </Col>
                                                        <Col>
                                                            <span className='project-description'>
                                                                Area is an IFTTT / Zapier like, made for an Epitech project.
                                                            </span>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="mt-5 ml-2 row-table">
                                <Col className="text-center mt-1 projects row-cell" xs={3}>
                                    <Card style={{height: '100%'}}>
                                        <Card.Header as="h5">Uikit</Card.Header>
                                        <Card.Body>
                                            <Card.Title>
                                                <Container fluid={true}>
                                                    <Row>
                                                        <Col>
                                                            <img alt={''} src={require('../../assets/uikit.png')} height={75}/>
                                                        </Col>
                                                        <Col>
                                                            <span className='project-description'>
                                                                Uikit is a flutter sample project with many prefabs widgets.
                                                            </span>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="text-center mt-1 ml-2 projects row-cell" xs={3}>
                                    <Card style={{height: '100%'}}>
                                        <Card.Header as="h5">Javascript blockchain</Card.Header>
                                        <Card.Body>
                                            <Card.Title>
                                                <Container fluid={true}>
                                                    <Row>
                                                        <Col>
                                                            <img alt={''} src={require('../../assets/blockchain.png')} height={75}/>
                                                        </Col>
                                                        <Col>
                                                            <span className='project-description'>
                                                                Javascript blockchain is a centralized blockchain.
                                                            </span>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <img style={{ right: 40, bottom: 50, position: 'absolute'}} src={require("../../assets/project.svg")} alt={''} height={window.innerWidth / 3} />
                        </Container>
                    </div>
                    :
                    <div className="about-page">
                        <Container fluid={true}>
                            <Row className="mt-2">
                                <Col>
                                    <h1>About me</h1>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col xs={6} className='ml-1'>
                                    <span className='about-me'>
                                        Hello, I am currently a student in IT at Epitech Paris. <br/>
                                        I already worked on many web, software, and mobile projects, at Epitech and in different companies. <br/>
                                        When I don't code I make music. This is my second passion !
                                    </span>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col>
                                    <h2>Skills</h2>
                                </Col>
                            </Row>
                            <Row className="mt-1">
                                <Col xs={5} className='ml-1'>
                                   <Container fluid={true}>
                                       <Row className='mt-5'>
                                           <Col className='text-center'>
                                               <img alt={''} src={require('../../assets/react.png')} height={75}/>
                                           </Col>
                                           <Col className='text-center'>
                                               <img alt={''} src={require('../../assets/angular.png')} height={75}/>
                                           </Col>
                                           <Col className='text-center'>
                                               <img alt={''} src={require('../../assets/flutter.png')} height={75}/>
                                           </Col>
                                           <Col className='text-center'>
                                               <img alt={''} src={require('../../assets/nodejs.png')} height={75}/>
                                           </Col>
                                       </Row>
                                       <Row className='mt-4'>
                                           <Col className='text-center'>
                                               <img alt={''} src={require('../../assets/C.png')} height={75}/>
                                           </Col>
                                           <Col className='text-center'>
                                               <img alt={''} src={require('../../assets/cpp.png')} height={75}/>
                                           </Col>
                                           <Col className='text-center'>
                                               <img alt={''} src={require('../../assets/docker.png')} height={75}/>
                                           </Col>
                                           <Col className='text-center'>
                                               <img alt={''} src={require('../../assets/mysql.png')} height={75}/>
                                           </Col>
                                       </Row>
                                       <Row className='mt-4'>
                                           <Col className='text-center'>
                                               <img alt={''} src={require('../../assets/git.png')} height={75}/>
                                           </Col>
                                           <Col className='text-center'>
                                               <img alt={''} src={require('../../assets/github.png')} height={75}/>
                                           </Col>
                                           <Col className='text-center'>
                                               <img alt={''} src={require('../../assets/gitlab.png')} height={75}/>
                                           </Col>
                                       </Row>
                                   </Container>
                                </Col>
                            </Row>
                            <img style={{ right: 40, bottom: 50, position: 'absolute'}} src={require("../../assets/about.svg")} alt={''} height={window.innerWidth / 3} />
                        </Container>
                    </div>
            }
            </>
        );
    }
}