import {useState} from "react"
import Start from "./components/start"
export const App = () => {

const [startVis, setStartVis] = useState(true)

const hide = () => {
  setStartVis(old => !old)
}

return (
  <div>
    {startVis && <Start hide={hide}/>}
  </div>
)
}
