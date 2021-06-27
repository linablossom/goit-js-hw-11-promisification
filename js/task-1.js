const logger = (time) => console.log(`Resolved after ${time}ms`);

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);
