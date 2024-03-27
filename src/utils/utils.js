export const queryParams = (params) => {
  delete params['callbackRequest'];
  delete params['callback'];
  delete params['url'];  
  return params;
}

export const queryParamsPost = (params) => {
  delete params['callbackRequest'];
  delete params['callback'];
  delete params['url']
  if(!!Object.keys(params).length){
    const fd = new FormData();
    console.log({params})
    for(let key in params){
      if(key === 'file'){
        // const file = new File([params[key]], params[key].name, { type: params[key].type})
        fd.append('upload_xls', params[key]);
      }else{
        console.log({key})
        console.log({key_param: params[key]})
        fd.set(key, params[key])
      }
      console.log(fd.get('id_telegram'))
    return fd;
    }
  }
  return params;
}