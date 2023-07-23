import axios from 'axios';
const baseUrl = 'https://type.fit/api/quotes';

export const motiviationAxios = () => {
  return axios
    .get(baseUrl)
    .then(response => {
      return response.data[9].text;
    })
    .catch(err => {
      throw new Error('Error occurred during Axios request.');
    });
};
