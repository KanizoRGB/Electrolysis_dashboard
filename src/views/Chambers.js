import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  Button,
  ButtonGroup,
} from "reactstrap";

import { DeviceSensorsConfig } from "variables/DeviceSensorsConfig";

import ChamberChart from "components/Charts/ChamberChart";

import ChartData from "variables/ChartData";

function Chambers(props) {
  const Devices = React.useMemo(() => Object.keys(DeviceSensorsConfig).filter((device) => device.includes('Chamber')), []);

  const [activeDevice, setActiveDevice] = React.useState(Devices[0]);

  return (
    <>
      <div className="content">
        <div>
          <h1 className="text-2xl font-bold text-gray-800" style={{marginTop: -10}}>
            Water-Based Electrolysis Monitoring Dashboard
          </h1>
          <p className="text-gray-600" style={{marginTop: -20, marginBottom: 20}}>
            Monitoring Oxygen and Hydrogen Harvesting at Kenyatta National
            Hospital
          </p>
        </div>

        <ButtonGroup
          className="btn-group-toggle"
          data-toggle="buttons"
          style={{ marginBottom: 30, display: "block" }}
        >
          {Devices.map((device, index) => {
            return (
              <Button
                tag="label"
                className={classNames("btn-simple", {
                  active: activeDevice === device,
                })}
                color="info"
                id="0"
                size="sm"
                onClick={() => setActiveDevice(device)}
              >
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  {device}
                </span>
                <span className="d-block d-sm-none">
                  {/* <i className="tim-icons icon-single-02" /> */}
                  <p style={{ marginBottom: 0 }}>{index + 1}</p>
                </span>
              </Button>
            );
          })}

          <span className="d-block d-sm-none" style={{ marginTop: 10 }}>
            <p>{activeDevice}</p>
          </span>
        </ButtonGroup>

        {activeDevice === "Chamber 1" && <ChamberChart config={ChartData['Chamber 1']} />}
        {activeDevice === "Chamber 2" && <ChamberChart config={ChartData['Chamber 2']} />}
        {activeDevice === "Chamber 3" && <ChamberChart config={ChartData['Chamber 3']} />}
      </div>
    </>
  );
}

export default Chambers;
