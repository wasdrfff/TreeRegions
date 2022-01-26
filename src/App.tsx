import React, { useEffect, useState } from 'react'
import { startMirage } from './server-mock'
import { Childrens } from './components/childrens'
import { createRegionsTree } from './utils/create-regions-tree'
import { getRegions } from './api/regions'

if (process.env.NODE_ENV === 'development') {
  startMirage()
}

function App() {
  const [regionsTree, setRegionsTree] = useState({})

  useEffect(() => {
    getRegions().then((res) => {
      setRegionsTree(createRegionsTree(res))
    })
  }, [])

  return (
    <div className="App">
      <Childrens childrens={regionsTree} />
    </div>
  )
}

export default App
