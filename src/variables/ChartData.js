import { DeviceSensorsConfig } from "variables/DeviceSensorsConfig";
import {
  generateTimestampsLabels,
  generateRandomData,
} from "utils/ChartSimulation";

const ChartData = Object.keys(DeviceSensorsConfig).reduce((data, key) => {
  let oxygenValues = [];

  const chamberData = DeviceSensorsConfig[key].map((config) => {
    let data = generateRandomData(
      config.min,
      config.max,
      config.decimal,
      config.initialValues
    );

    if (config.title === 'Oxygen Volume') {
      oxygenValues = data;
    } else if (config.title === 'Hydrogen Volume' && oxygenValues.length) {
      data = oxygenValues.map((val) => (val * 2).toFixed(0));
    }
    
    return {
      title: config.title,
      xLabel: config.xLabel,
      yLabel: config.yLabel,
      labels: generateTimestampsLabels(
        config.intervalType,
        config.intervalValue,
        config.initialValues
      ),
      data
    };
  });

  data[key] = chamberData;

  return data;
}, {});

export default ChartData;
