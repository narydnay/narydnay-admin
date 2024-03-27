import { api } from "../../api/api"
import { queryParams, queryParamsPost } from "../../utils/utils";

/* eslint-disable */
export const apiStore = store => {
  store.on('get', async (_, params) => {
    try {      
      const res = await api.get(params.url, queryParams({...params}));      
      return params.callbackRequest(res);
    } catch (error) {
      console.log('ERROR REQUEST GET', error)
    }
  } )
  
  store.on('post', async (_, params) => {
    try { 
      const res = await api.post(params.url, queryParamsPost({...params}));
      return params.callbackRequest(res)
    } catch (error) {
      console.log('ERROR REQUEST POST', error)
    }
  })
  
  store.on('put', async (_, params) => {
    try {      
      const res = await api.put(params.url, queryParams({...params}));
      return params.callbackRequest(res)
    } catch (error) {
      console.log('ERROR REQUEST POST', error)
    }
  })
}