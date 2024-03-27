import React from 'react'

export default function Offset({
  mt,
  mb,
  ml,
  mr,
  children,
}:{
  mt?:number | undefined | null,
  mb?:number | undefined | null,
  ml?:number | undefined | null,
  mr?:number | undefined | null,
  children?: string | null | undefined
}): any {
  let styleMargin = {}
  if( mt ) styleMargin = { marginTop: mt }
  if( mb ) styleMargin = { marginBottom: mb }
  if( ml ) styleMargin = { marginLeft: ml }
  if( mr ) styleMargin = { marginRight: mr }

  return (
    <div 
      style={styleMargin}
    >{children}</div>
  )
}
