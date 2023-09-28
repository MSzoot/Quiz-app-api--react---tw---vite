import {useState , useEffect} from "react"
import Start from "./components/start"
import Question from "./components/question";

export const App = () => {

  const [startVis, setStartVis] = useState(true);

  const [allData , setAllData] = useState(null)
  
  const [questions,setQuestions] = useState([]);

  const [answers,setAnswers] = useState([])

  useEffect(()=>{
    fetch("https://the-trivia-api.com/api/questions ")
    .then(res => res.json())
    .then((data) => {
      setAllData(data.splice(5))
      setQuestions(data.map(res => res.question))
      const allAnswers = data.map(res => ([...res.incorrectAnswers, res.correctAnswer]))
      const final = allAnswers.map(element => 
        element.map((ans,index) => ({
          answer : ans,
          chosen:false,
          isCorrect : index === element.length - 1
        }))
      );
      
      setAnswers(final)
    })
  },[])



const hide = () => {
  setStartVis(old => !old)
  console.log(answers)
  // console.log(allData)
}



return (
  <div>
    {startVis && <Start hide={hide}/>}
  </div>
)
}
