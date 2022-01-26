import React from 'react'
import { TChildrens } from '../../types'
import { Node } from '../node/index'

type TProps = {
  childrens: TChildrens
}

export function Childrens({ childrens }: TProps) {
  return (
    <>
      {Object.keys(childrens).map((childrenKey) => (
        <Node key={childrenKey} node={childrens[childrenKey]} />
      ))}
    </>
  )
}
