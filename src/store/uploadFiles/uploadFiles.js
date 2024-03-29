import { message } from 'antd'

export const uploadFiles = store => {

  store.on('@init', () => ({uploadPercent: 0}));
  store.on('ACTION_SET_PERCENT_LOADING_FILE', (_,data) => ({uploadPercent: data}))
  store.on('@init', () => ({errorUpload: ''}));
  store.on('ACTION_SET_ERROR_UPLOAD_FILE', (_,data) => ({errorUpload: data}))

  store.on('sendXlsFile', (_, data, {dispatch} )=>{

    console.log({data})
    const params = {
      url: '/api/upload-xls',
      callbackRequest: res => {
        if(typeof data?.callback === 'function') data.callback();
        dispatch('ACTION_SET_PERCENT_LOADING_FILE', 0)
        console.log({res})
        if(res.info.status){
          message.success(res.info.message)
        }else{
          dispatch('ACTION_SET_ERROR_UPLOAD_FILE', res.info.message)
          message.error(res.info.message)

        }

      },
      ...data
    }

    dispatch('post', params)
  })
}