import React, { Component } from 'react'
import { connectStoreon } from 'storeon/react'
import Setting from './Setting'
import { message } from 'antd'

class SettingContainer extends Component<any,any> {
  state = {
    isActiveButton: false,
    file: null
  }


  componentWillUnmount(): void {
    this.setState( (state: {}) => ({
      ...state,
      isActiveButton: false,
      file: null
    }))  
  }

  handleSendFile = () => {
    if(this.state.file){
      // console.log(this.state.file)
      this.props.dispatch('sendXlsFile', {file:this.state.file})
    }else{
      message.error('Помилка завантаження')
    }
  }



  handlerUploadFile = (event?:any) => {
    console.log({event})
    const { file }: any = event;
    console.log({file})
    this.setState( (state: {}) => ({
      ...state,
      isActiveButton: true,
      file: file
    }))
  }
  render() {
    return (
      <Setting
        handleSendFile={this.handleSendFile}
        isActiveButton={this.state.isActiveButton}
        handlerUploadFile={this.handlerUploadFile}
      />
    )
  }
}

export default connectStoreon(

  SettingContainer
)