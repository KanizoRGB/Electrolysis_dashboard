const generateTimestampsLabels = (
  intervalType,
  intervalValue,
  numberOfValues
) => {
  const timestamps = [];

  const startTime = new Date();

  if (intervalType === "minute") {
    // Floor to the nearest 5
    startTime.setMinutes(Math.floor(startTime.getMinutes() / 5) * 5);
  }

  if (intervalType === "hour") {
    // Floor to the nearest 30
    startTime.setMinutes(Math.floor(startTime.getMinutes() / 30) * 30);
  }

  // Set the increment based on interval type
  const increment =
    intervalType === "minute"
      ? intervalValue * 60 * 1000 // Minutes to milliseconds
      : intervalType === "hour"
      ? intervalValue * 60 * 60 * 1000 // Hours to milliseconds
      : intervalValue * 24 * 60 * 60 * 1000; // Days to milliseconds

  let time = startTime;

  // Generate timestamps
  for (let i = 0; i < numberOfValues; i++) {
    if (intervalType === "day") {
      // Return short date string for days
      timestamps.push(
        new Date(time).toLocaleDateString([], {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      );
    } else {
      // Return time string for minutes or hours
      timestamps.push(
        new Date(time).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }

    time.setTime(time.getTime() - increment);
  }

  return timestamps.reverse();
};

const generateRandomValue = (min, max, decimalPlaces) => (Math.random() * (max - min) + min).toFixed(decimalPlaces);

const generateRandomData = (min, max, decimalPlaces, length) => Array.from({ length }, () => generateRandomValue(min, max, decimalPlaces));

module.exports = {
  generateTimestampsLabels,
  generateRandomValue,
  generateRandomData
};