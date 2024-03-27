import axios from "axios";


 class Api {
  HOST = 'http://193.0.61.232:'  //process.env.NODE_ENV !== 'development'? process.env.REACT_APP_HOST_DEV : process.env.REACT_APP_HOST_PROD;
  PORT = 7000; //process.env.REACT_APP_SERVER_PORT
  async get(url, params){
    try {      
      // console.log({params})
      const res = await axios.get(this.HOST + this.PORT + url, {params})
      return res.data;
    } catch (error) {
      throw error;  
    }
  }

  async post(url, params){    
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      };
      const res = await axios.post(this.HOST + this.PORT + url, params, config)
      return res.data
    } catch (error) {
      throw error
    }
  }

  async put(url, params){
  // console.log({params})

    try {      
      const res = await axios.put(this.HOST + this.PORT + url, params)
      return res.data;
    } catch (error) {
      throw error;  
    }
  }
} 

export const api = new Api();