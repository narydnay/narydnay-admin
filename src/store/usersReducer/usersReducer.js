
/* eslint-disable */
export const users = store => {
  store.on('@init', () => {count: 0} );
  store.on('inc', ({count}) => ({count: count + 1}));
  store.on('set', (_, data) => ({count: data}));

  const initUsersProfile = {};
  store.on('@init', ()=>({usersProfile: initUsersProfile}));
  store.on('setUsersProfile', (_,data) => ({usersProfile: data}));
  store.on('getUsers', (_,data, { dispatch })=>{
    const params = {
      url: '/api/kik-admin/users',
      callbackRequest: res => {
        console.log(res)
        dispatch('setUsersProfile', res)
      }
    };

    dispatch("get", params);
    return; 
  })
  store.on('getUserProfileData', (_,data, { dispatch })=>{
    const params = {
      url: '/api/kik-admin/user-profile',
      callbackRequest: res => {
        console.log(res)
      },
      ...data
    };

    dispatch("get", params);
    return; 
  })

  store.on('changeAccessUser', ({usersProfile},data, { dispatch })=>{
    const params = {
      url: '/api/kik-admin/users-access',
      callbackRequest: res => {
        if(typeof data?.callback === 'function') data.callback();
        dispatch('setUsersProfile', {
          ...usersProfile,
          results: usersProfile.results.map(el => el.id === res.results[0].id? {...el, ...res.results[0]} : el) 
        })
      },
      ...data
    };
    dispatch("put", params);
    return; 
  })
};
