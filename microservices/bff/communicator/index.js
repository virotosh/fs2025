const axios = require('axios');

class Communicator {
 async userService(req, res) {
   try {
       const axiosResponse = await axios({
           method: req.method,
           url: "http://localhost:5001" + req.url,
           headers: req.headers,
           data: req.body,
           withCredentials: true
       })
       if (axiosResponse.headers['set-cookie'])
           res.append('Set-Cookie',axiosResponse.headers['set-cookie']);
       res.status(axiosResponse.status).json(axiosResponse.data);
   }
   catch (err) {
       res.status(err.response.status).json(err.response.data);
   }
 }


 async itemService(req, res) {
   try {
       const axiosResponse = await axios({
           method: req.method,
           url: "http://localhost:5002" + req.url,
           headers: req.headers,
           data: req.body,
           withCredentials: true
       })
       if (axiosResponse.headers['set-cookie'])
           res.append('Set-Cookie',axiosResponse.headers['set-cookie']);
       res.status(axiosResponse.status).json(axiosResponse.data);
   }
   catch (err) {
       res.status(err.response.status).json(err.response.data);
   }
 }
}
module.exports = new Communicator();