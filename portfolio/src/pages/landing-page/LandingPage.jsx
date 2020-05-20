import React from 'react';
import {Col, Row, Container, Image} from "react-bootstrap";
import CustomCard from "../../components/card";

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

    gotoProjects() {
        this.setState({
            page: 1,
            opacity_1: 0,
        });
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.page === 0
                    ?
                        <div className="background-image" id="App" style={{opacity: this.state.opacity_1 + '%'}}>
                            <Container fluid={true} style={{height: '100%'}} className="">
                                <Row className="align-content-center">
                                    <Col className="mx-auto mt-5" style={{textAlign: 'center'}} md={4} xs={12}>
                                        <h1>Louis-Frédéric Fortier</h1>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Container className="mt-5">
                                        <Row className="mt-5">
                                            <Col xs={12} md={4} className="mb-3">
                                                <CustomCard title='Projects &#128187;' onClick={() => this.gotoProjects()}/>
                                            </Col>
                                            <Col xs={12} md={4} className="mb-3">
                                                <CustomCard title='About &#129488;'/>
                                            </Col>
                                            <Col xs={12} md={4} className="mb-3">
                                                <CustomCard title='Courses &#127891;'/>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Row>
                                <Row className="fixed-bottom mb-3">
                                    <Col className="my-auto" align='center' md={{span: 2, offset: 5}}>
                                        <Image className="scroll-bottom" height={50} src={require('../../assets/scroll-bottom.png')}/>
                                    </Col>
                                    <Col className="credits mt-4" xs={12} md={{span: 2, offset: 3}} style={{textAlign: 'center'}}>
                                        <span>Made with &#10084; by <a href='https://github.com/Loufi1' className='link'>Loufi</a></span>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    :
                        <div className="project-page">
                            <Container fluid={true}>
                                <Row className="align-content-center">
                                    <Col className="mx-auto mt-5" style={{textAlign: 'center'}} xs={4}>
                                        <h1>Projects</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                }
            </div>
        );
    }
}