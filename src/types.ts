export type TNode = {
    id: string
    name: string
    path: string
    childrens: { [key: string]: TNode }
  }

export type TChildrens={ [key: string]: TNode }
