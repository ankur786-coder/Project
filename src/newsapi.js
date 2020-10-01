// newspai - e122d722038042529cf99dba207ca492

import Axios from "axios";

const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=e122d722038042529cf99dba207ca492";

/*export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
  /*let result = axios.get(url).then(response => response.json());
  print(result);
  return result;
}*/



export async function getNews () {
  let result = await fetch(url).then(response => response.json());
  console.log(result);
  return result.articles;
  /*
  let response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=e122d722038042529cf99dba207ca492").then(response => response.json());
  console.log(response);
  return response.articles;*/
};