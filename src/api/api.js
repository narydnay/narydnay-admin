import axios from "axios";




class Api {
  HOST = 'http://193.0.61.232:'  //process.env.NODE_ENV !== 'development'? process.env.REACT_APP_HOST_DEV : process.env.REACT_APP_HOST_PROD;
  PORT = 7000; //process.env.REACT_APP_SERVER_PORT
  createAxios = axios.create({
    headers: { 
      'x-apikey': '59a7ad19f5a9fa0808f11931',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  })
  async get(url, params){
    try {      
      // console.log({params})
      const res = await this.createAxios.get(this.HOST + this.PORT + url, {params})
      return res.data;
    } catch (error) {
      throw error;  
    }
  }

  async post(url, params, configCustom={}){    
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        ...configCustom
      };
      const res = await this.createAxios.post(this.HOST + this.PORT + url, params, config)
      return res.data
    } catch (error) {
      throw error
    }
  }

  async put(url, params){
  // console.log({params})

    try {      
      const res = await this.createAxios.put(this.HOST + this.PORT + url, params)
      return res.data;
    } catch (error) {
      throw error;  
    }
  }
} 

export const api = new Api();