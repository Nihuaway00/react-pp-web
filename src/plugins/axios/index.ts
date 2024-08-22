import axios from "axios";
// *** в этом файле будет промежуточная обработка запросов ***

const axiosIns = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.APP_URL,
});

axiosIns.interceptors.request.use(onFulfilled, (error) =>
  Promise.reject(error)
);

axiosIns.interceptors.response.use((response) => response, onRejected);

function onFulfilled(config) {
  return config;
}

async function onRejected(error) {
  const { config: originalRequest, response } = error;

  if (response && response.status === 401) {
    return new Promise((resolve, reject) => {
      resolve(axiosIns(originalRequest));

      reject(error);
    });
  }

  return Promise.reject(error);
}

export default axiosIns;