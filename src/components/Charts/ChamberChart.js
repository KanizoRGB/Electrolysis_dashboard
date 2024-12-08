import React from "react";
import { Line, Bar } from "react-chartjs-2";

import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

import { ChartOptions, LineChartConfig } from "variables/ChartConfig";

function ChamberChart(props) {
  const { config } = props;

  return (
    <>
      <Row>
        <Col lg="4">
          <Card className="card-chart">
            <CardHeader>
              {/* <h5 className="card-category">Chamber 1</h5> */}
              <CardTitle tag="h4">Overview</CardTitle>
            </CardHeader>
            <CardBody style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 0 }}>
              <div className="chart-area">
                <Row>
                  <Col xs="7">
                    <p>Status</p>
                  </Col>
                  <Col xs="5">
                    <p
                      className="text-right"
                      style={{ color: "var(--purple)" }}
                    >
                      ON
                    </p>
                    {/* <p className="text-right" style={{color: 'var(--danger)'}}>OFF</p> */}
                  </Col>
                </Row>
                <Row>
                  <Col xs="7">
                    <p>Oxygen Levels</p>
                  </Col>
                  <Col xs="5">
                    <p
                      className="text-right"
                      style={{ color: "rgb(29,140,248)" }}
                    >
                      {config[0].data[config[0].data?.length - 1]}{" "}
                      {config[0].yLabel}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="7">
                    <p>Oxygen Flow Rate</p>
                  </Col>
                  <Col xs="5">
                    <p className="text-right">70 L/min</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="7">
                    <p>Hydrogen Levels</p>
                  </Col>
                  <Col xs="5">
                    <p
                      className="text-right"
                      style={{ color: "rgb(75,192,121)" }}
                    >
                      {config[1].data[config[1].data?.length - 1]}{" "}
                      {config[1].yLabel}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="7">
                    <p>Hydrogen Flow Rate</p>
                  </Col>
                  <Col xs="5">
                    <p className="text-right">150 L/min</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="7">
                    <p>Pressure</p>
                  </Col>
                  <Col xs="5">
                    <p className="text-right">
                      {config[2].data[0]} {config[2].yLabel}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="7">
                    <p>Temperature</p>
                  </Col>
                  <Col xs="5">
                    <p className="text-right">
                      {config[5].data[0]}{config[5].yLabel}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="7">
                    <p>Water Level</p>
                  </Col>
                  <Col xs="5">
                    <p className="text-right">
                      {config[4].data[0]}{config[4].yLabel}
                    </p>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg="8">
          <Card className="card-chart">
            <CardHeader>
              {/* <h5 className="card-category">Chamber 1</h5> */}
              <CardTitle tag="h4">Energy Consumption</CardTitle>
            </CardHeader>
            <CardBody style={{ paddingTop: 0 }}>
              <div className="chart-area">
                <Bar
                  data={LineChartConfig(
                    config[3].labels,
                    config[3].title,
                    config[3].data
                  )}
                  options={ChartOptions(config[3].xLabel, config[3].yLabel, 'bar')}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm="12">
          <Card className="card-chart">
            <CardHeader>
              {/* <h5 className="card-category">Chamber 1</h5> */}
              <CardTitle tag="h4">Gas Volume</CardTitle>
            </CardHeader>
            <CardBody style={{ paddingTop: 0 }}>
              <div className="chart-area">
                <Line
                  data={LineChartConfig(
                    config[0].labels,
                    config[0].title,
                    config[0].data,
                    config[1].title,
                    config[1].data
                  )}
                  options={ChartOptions(config[0].xLabel, config[0].yLabel)}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ChamberChart;
