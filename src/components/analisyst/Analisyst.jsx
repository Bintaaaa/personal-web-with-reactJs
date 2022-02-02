import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Tooltip } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts';

class Analisyst extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    technology: 'PHP',
                    project: 100,
                },
                {
                    technology: 'MySqli',
                    project: 80,
                }, {
                    technology: 'JS',
                    project: 20,
                }, {
                    technology: 'Flutter',
                    project: 100,
                }, {
                    technology: 'NodeJs',
                    project: 40,
                }, {
                    technology: 'Vue JS',
                    project: 65,
                },
            ]
        }
    }
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceTitle'>TECHNOLOGY USED</h1>
                    <div className="underlineOfServiceTitle"></div>
                    <Row>
                        <Col style={{ width: '100%', height: '300px' }} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>

                                    <XAxis dataKey="technology" />
                                    <Tooltip />
                                    <Bar dataKey="project" fill="#8884d8" >

                                    </Bar>


                                </BarChart>
                            </ResponsiveContainer>

                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className='text-justify serviceCardDescription'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic minus neque magnam, facere quae vero repellat? Assumenda, molestiae dicta? Sint saepe id vel delectus accusamus, veritatis consequuntur. Est dolore perspiciatis iusto vero nemo. Ullam, aliquid! Architecto vitae laborum eum ipsa earum blanditiis labore, porro doloremque nisi incidunt fugit. Cum eveniet temporibus, quibusdam natus quasi, maiores odit corrupti mollitia placeat, rem eaque distinctio architecto. Eaque nobis architecto dolore atque consequatur animi illum expedita quis, magnam excepturi repellat numquam officia impedit voluptate quas tempore. Eum non nostrum et architecto, autem optio voluptatibus voluptas ex incidunt dicta! Quae consequuntur sequi voluptatum harum blanditiis.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment >
        )
    }
}

export default Analisyst
