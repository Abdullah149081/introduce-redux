const logger = (store) => (next) => (action) => {
  console.log("Current State =>", store.getState());
  console.log("Action =>", action);
  next(action);
  console.log("Next State =>", store.getState());
};

export default logger;