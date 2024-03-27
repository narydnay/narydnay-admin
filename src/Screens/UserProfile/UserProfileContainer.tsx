import React, { Component } from 'react'
import UserProfile from './UserProfile'
import { connectStoreon } from 'storeon/react'
import WithRouter from '../../HOC/WithRouter'

 class UserProfileContainer extends Component<any, any, any> {
  
  componentDidMount(): void {
      this.props.dispatch('getUserProfileData',{id_telegram: this.props.id})
  }


  render() {
    console.log(this)
    return (
      <UserProfile 

      />
    )
  }
}

export default connectStoreon( 
  
  WithRouter(UserProfileContainer)
);