import {useState , useEffect} from "react"
import Start from "./components/start"
import Question from "./components/question";
// import Question from "./components/question";

export const App = () => {

  const [startVis, setStartVis] = useState(true);

  const [allData , setAllData] = useState([])
  
    // shuffle function to change place of correct answer
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
      return array;
    }

    const handleAnswered = (answer) => {
      

    }

    //pulls from api and aranges data into predifined states 
  useEffect(()=>{
    fetch("https://the-trivia-api.com/api/questions ")
    .then(res => res.json())
    .then((data) => {
      setAllData(data.splice(5).map((q => ({
        ...q ,
        allAnswers : shuffleArray([...q.incorrectAnswers, q.correctAnswer]),
        isAnswered : false,
        isAnsweredCorrectly : false
      }))))
    })
  },[])


const hide = () => {
  setStartVis(old => !old)
  console.log(allData)
}


const qElements = allData.map(q => (
  <Question
      key={q.id}
      id={q.id}
      question={q.question}
      allAnswers = {q.allAnswers}
      correct = {q.correctAnswer}
      isAnswered = {q.isAnswered}

  />
)) 

return (
  <div>
    {startVis && <Start hide={hide}/>}
    {!startVis &&  qElements }
    {!startVis && <button>Check answers</button>}
  </div>
)
}
