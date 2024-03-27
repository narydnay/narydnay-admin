import React from 'react'
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
import Offset from '../../Views/Offset/Offset';

export default function Setting({
  isActiveButton,
  handleSendFile,
  handlerUploadFile,
}:{
  handleSendFile: any,
  isActiveButton: boolean,
  handlerUploadFile: any
}){
  
  const { Dragger } = Upload;
  
  const props: UploadProps = {
    name: 'file',
    multiple: false,

    customRequest: event => handlerUploadFile(event),
    // action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
      // console.log({info});
      // const { status } = info.file;
      // if (status !== 'uploading') {
      //   console.log(info.file, info.fileList);
      // }
      // if (status === 'done') {
      //   message.success(`${info.file.name} Файл підготовлений для завантаження.`);
      // } else if (status === 'error') {
      //   message.error(`${info.file.name} підготовка файлу відбулася з помилкою.`);
      // }
    },
    onDrop(e) {
      if(e.dataTransfer.files.length >1){
        message.error(`кількість файлів не більше 1.`)
      }
      // console.log('Dropped files', e.dataTransfer.files[0]);
      handlerUploadFile(e.dataTransfer.files[0])
    },
  };
  return (
    <>
  <Dragger {...props} height={200}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Додати файл Excel з базою данних</p>
    <p className="ant-upload-hint">
    або перетягніть у обвидену пунтиром область.
    </p>
  </Dragger>
  <Offset  mb={50} />
      
      <Button
        disabled={!isActiveButton}
        onClick={handleSendFile}
      >
        завантажити 
      </Button>    
    </>
  )
}
