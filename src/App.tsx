import { useEffect, useState } from "react"
import { receivedZones } from "./data"
import { List } from "./List"
import { Zone } from "./types/zone"

function App() {
  const [zones, setZones] = useState<Array<Zone>>([])

  useEffect(() => {
    Promise.resolve().then(() => setZones(receivedZones))
  }, [])

  return <List zones={zones} onSetZones={setZones} />
}

export default App
