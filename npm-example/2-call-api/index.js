import { jsonPlaceHolderClient } from '../utility/axios.util.js'

const URL = '/posts';
const { data, status } = await jsonPlaceHolderClient.get(URL);

console.log({
  status,
  data,
});
