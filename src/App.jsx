import {useState , useEffect} from "react"
import Start from "./components/start"
import Question from "./components/question";

export const App = () => {

const [startVis, setStartVis] = useState(true);

const [qData,setqData] = useState('')



const hide = () => {
  setStartVis(old => !old)
  console.log(qData)
}


useEffect(()=>{
  fetch("https://the-trivia-api.com/api/questions ")
  .then(res => res.json())
  .then((data) => {
    data.splice(5)
    setqData(data)
  })
},[])



const questionElements = () =>{
  return (
  qData.map(obj => (
  <Question 
    question={obj.question}
    wrong={obj.incorrectAnswers}
    correct={obj.correctAnswer}
    key={obj.id} 
  />
  )
))}

return (
  <div>
    {startVis && <Start hide={hide}/>}
    {!startVis && <form className=" w-10/12 my-10 mx-auto">{questionElements()} </form>}
  </div>
)
}
