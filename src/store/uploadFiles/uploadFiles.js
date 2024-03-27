

export const uploadFiles = store => {

  store.on('sendXlsFile', (_, data, {dispatch} )=>{

    console.log({data})
    const params = {
      url: '/api/upload-xls',
      callbackRequest: res => {
        if(typeof data?.callback === 'function') data.callback();
        console.log({res})
      },
      ...data
    }

    dispatch('post', params)
  })
}