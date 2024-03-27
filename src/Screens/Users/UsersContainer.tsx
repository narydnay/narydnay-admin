import React, { Component } from 'react'
import Users from './Users'
import { connectStoreon } from 'storeon/react'
import { Checkbox, Table, type TableColumnsType } from 'antd'
import { Link } from 'react-router-dom'

export interface DataType {
  id: number,
  first_name: string,
  id_telegram: number,
  username: string,
  is_active: boolean,
  is_blocked: boolean,
}

interface State {
  selectedRowKeys: number[],
  isLoad: boolean,
}
class UsersContainer extends Component<any, State, any> {

  state: State = {
    selectedRowKeys: [],
    isLoad: false,
  }

    columns: TableColumnsType<DataType> = [
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Призвище',
          dataIndex: 'first_name',
          key: 'first_name',
          render: ( text: string, obj:any ) => <Link to={ obj.id_telegram }>{text}</Link>,
        },
        {
          title: 'username',
          dataIndex: 'username',
          key: 'username',
        },
        // Table.SELECTION_COLUMN,
        {
          title: 'Авторизован',
          dataIndex: 'row',
          key: 'row1',
          render: (row, rowIndex ): any => {
            const id:number = rowIndex.id;
            return (
              <Checkbox 
                key={row}
                checked={rowIndex.is_active}
                telegram-id = {rowIndex.id_telegram}
                onChange={(event)=>{this.handlerChangeCheckBox(event.target)}}
              />
            )
          }
        },
        {
          title: 'статус',
          dataIndex: 'is_blocked',
          key: 'is_blocked',
          render: (row, rowIndex) => rowIndex.is_blocked? 'заблоковано' : 'розблоковано'
        },
    ]

    componentDidMount(): void {
    this.props.dispatch('getUsers')    
  }

  callback = () => {
    this.setState(state => ({
      ...state,
      isLoad: false
    }))

  }

  handlerChangeCheckBox = (el: any) => {
    this.setState(state => ({
      ...state,
      isLoad: true
    }))
    const id_telegram = el['telegram-id']
    const is_active = el.checked
    // console.log({el}, id_telegram)
    this.props.dispatch('changeAccessUser', {
      id_telegram,
      is_active,
      callback: this.callback
    })
  }


  render() {

    return (
      <Users
        isLoad= {this.state.isLoad}
        columns={this.columns}
        listUsersProfile = {this.props.usersProfile?.results}
      />
    )
  }
}




export default connectStoreon(
  'usersProfile',
  UsersContainer
)