import {useState , useEffect} from "react"
import Start from "./components/start"
import Question from "./components/question";

export const App = () => {

  useEffect(()=>{
    fetch("https://the-trivia-api.com/api/questions ")
    .then(res => res.json())
    .then((data) => {
      data.splice(5)
      let editedData = data.map(q => ({...q, allAnswers : shuffleAndEdit([...q.incorrectAnswers, q.correctAnswer])}))
      setqData(editedData)
    })
  },[])

const [startVis, setStartVis] = useState(true);

const [qData,setqData] = useState('')

const hide = () => {
  setStartVis(old => !old)
  console.log(qData)
}

const shuffleAndEdit = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.map((answer) => ({
      content: answer,
      choosen: false
    }))
  }


  const handleClick = (ans) => {
        const upadatedQData = qData.map((item) => ({
          ...item,
          allAnswers:item.allAnswers.map((answer) => 
            answer.content === ans ? { ...answer, choosen: !answer.choosen } : answer
          )
        }))
        setqData(upadatedQData)
  }


  useEffect(() => {
    console.log(qData);
  }, [qData]); 

const questionElements = () =>{
  return (
  qData.map(obj => (
  <Question 
    question={obj.question}
    allAnswers = {obj.allAnswers}
    key={obj.id} 
    id={obj.id} 
    handleClick={handleClick}
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
