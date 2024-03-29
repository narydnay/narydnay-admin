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
  
  store.on('post', async (_, params,{dispatch}) => {
    try { 
      let percent = 0;
      let prevPercent = 0;
      const config = {
        onUploadProgress: (progressEvent) => {
          let oldPercent = []
          const { loaded, total } = progressEvent;
          percent = Math.floor((loaded * 100) / total)
          console.log(`${loaded}kb of ${total}kb | ${percent}%`) // just to see whats happening in the console

          if (+percent <= 100) {
            console.log(oldPercent, ' < ', +percent)
            console.log(+Math.max(...oldPercent), ' < ', +percent)
            if (Math.max(...oldPercent) < +percent && +prevPercent < +percent) {
              oldPercent.push(+percent)
              prevPercent = +percent
              dispatch('ACTION_SET_PERCENT_LOADING_FILE', +percent) // hook to set the value of current level that needs to be passed to the progressbar
            }
          }
        },
      }
      const res = await api.post(params.url, queryParamsPost({...params}), config);
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