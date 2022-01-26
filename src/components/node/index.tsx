import React, { useCallback, useState } from 'react'
import { TNode } from '../../types'
import { Childrens } from '../childrens'
import { ArrowIcon } from './arrow-icon'
import { CubeIcon } from './cube-icon'
import './style.css'

type TProps = {
  node: TNode
}

export function Node({ node }: TProps) {
  const [isShow, setIsShow] = useState(false)

  const hasChildrens = !!Object.keys(node.childrens).length

  return (
    <div className="node">
      <div className="node__title">
        <div
          className={`node__arrow${isShow ? '.open' : ''}`}
          onClick={useCallback(() => {
            setIsShow(!isShow)
          }, [isShow])}
        >
          <ArrowIcon />
        </div>
        <CubeIcon />
        <span>{node.name}</span>
      </div>
      <div className={`node__childrens${!hasChildrens || !isShow ? '' : '.open'}`}>
        <Childrens childrens={node.childrens} />
      </div>
    </div>
  )
}
