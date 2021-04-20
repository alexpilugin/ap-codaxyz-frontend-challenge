const api = {
  sendEvent(pageName) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`event sent for page visit: ${pageName} Page`);

        resolve('success');
      }, 250);
    });
  },
};

export default {
  api,
};
