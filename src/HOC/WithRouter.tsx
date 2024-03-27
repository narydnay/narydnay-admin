import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
/* eslint-disable */
function WithRouter(Component: typeof React.Component) {
  
  const  ComponentWithRouterProp = (props: any) => {
    const {id} = useParams<{id?:string}>();
    const navigate = useNavigate();
    // console.log(params);
    return (
      <Component
        id={id}
        navigate={navigate}
        {...props}
      />
    )
  }
  return ComponentWithRouterProp
}

export default WithRouter;