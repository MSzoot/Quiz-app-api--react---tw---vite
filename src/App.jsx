import {useState , useEffect} from "react"
import Start from "./components/start"
import Question from "./components/question";

export const App = () => {

  const [startVis, setStartVis] = useState(true);

  const [allData , setAllData] = useState(null)
  
  const [questions,setQuestions] = useState([]);

  const [answers,setAnswers] = useState([])


//pulls from api and aranges data into predifined states 
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
          isCorrect : index === element.length - 1  // not ideal solution but it will do for now ;)
        }))
      );
      final.forEach(array => {
        shuffleArray(array)
      });
      setAnswers(final)
    })
  },[])

  // shuffle function to change place of correct answer
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


const hide = () => {
  setStartVis(old => !old)
  console.log(answers)
  console.log(questions)
}



return (
  <div>
    {startVis && <Start hide={hide}/>}
  </div>
)
}
