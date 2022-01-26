import { TChildrens, TNode } from "../types"

function createLeafInTree(childrens:TChildrens , leaf: TNode, path: string[]) {
    const currentPath = path[0]
    const restPath = path.slice(1)
    if (path.length === 1) {
      childrens[currentPath] = leaf
      childrens[currentPath].childrens = {}
    } else {
      if (!childrens[currentPath].childrens) {
        childrens[currentPath].childrens = {}
      }
      createLeafInTree(childrens[currentPath].childrens, leaf, restPath)
    }
  }
  
  export function createRegionsTree(regions: Array<TNode>) {
    const sortedRegions = regions.sort((a, b) => a.path.length - b.path.length)
  
    const rootChildrens = {}
  
    sortedRegions.forEach((reg) => {
      createLeafInTree(rootChildrens, reg, reg.path.split('.'))
    })
  
    return rootChildrens
  }
  