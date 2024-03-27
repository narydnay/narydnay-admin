import * as React from 'react'
import { Divider, Table } from "antd";
import ContainerSection from '../../Views/Sections/ContainerSection';

export default function Users({
  isLoad,
  columns,
  listUsersProfile,
}:{
  isLoad: boolean | any,
  columns: any,
  listUsersProfile: [],
}): any {
  if (!(listUsersProfile && listUsersProfile?.length)) return <div>'Loading ....'</div>;
  return (
    <ContainerSection>     
      <Divider /> 
      { 
        isLoad && 'loading ....'
      }
      <Table 
        dataSource={listUsersProfile} 
        columns={columns} 
      />
    </ContainerSection>
  )
}
