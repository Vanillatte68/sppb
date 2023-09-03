import Layout from "../components/layout"
import axios from "axios";

export default function tryData () {
    const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8080/api/beras',
  headers: { 
    'Cookie': 'bezkoder=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjIiLCJpYXQiOjE2OTM3NDk3OTEsImV4cCI6MTY5MzgzNjE5MX0.m93Y65vtkIfFCDp_0vM0ebI5GotqA5-5J-3EtmHMYQ51axyQUEdom7UmSIGvaFdWReYExZzIlZrjSVV59gECLw'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

    return(
        <Layout>
            <h1>Test fetching</h1>
        </Layout>
    );
}