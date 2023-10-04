import {useState , useEffect} from "react"
import Start from "./components/start"
import Question from "./components/question";

export const App = () => {

  const [startVis, setStartVis] = useState(true);

  const [allData , setAllData] = useState([])

  const [tryAgain,setTryAgain] = useState(false)

  const [score, setScore] = useState(0)

  
    // shuffle function to change shuffle allAnswers array
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }


    // function to mark question as answered and check was it answered correctly ?
    const handleAnswered = (answer) => {
      const updatedData = allData.map((q) => {
        if (answer === q.correctAnswer) {
          return { ...q, isAnsweredCorrectly: true, isAnswered: true };
        } else if (q.allAnswers.includes(answer)) {
          return { ...q, isAnswered: true, isAnsweredCorrectly: false };
        } else {
          return { ...q };
        }
      });
      setAllData(updatedData);
    };

    // function for button to show results 
    const handleCheckResults = () => {
      setAllData(old => old.map(q => q.isAnswered ? {...q, showResults:true} : q  ))
    }

    const handleTryAgain = () => {
      if(allData.every(q => q.showResults === true)){
      setTryAgain(state => !state)
      }
    }

    // simple function to hide starting screen
    const hide = () => {
      setStartVis(old => !old)
    } 


 // pulls questions from api , and edit fetched data, will fire only once
  useEffect(()=>{
    fetch("https://the-trivia-api.com/api/questions ")
    .then(res => res.json())
    .then((data) => {
      setAllData(data.splice(5).map((q => ({
        ...q ,
        allAnswers : shuffleArray([...q.incorrectAnswers, q.correctAnswer]),
        isAnswered : false,
        isAnsweredCorrectly : false,
        showResults  : false 
      }))))
    })
  },[tryAgain])




useEffect(()=>{
  console.log(allData)
},[allData])


// add props to question components 
const qElements = allData.map(q => (
  <Question
      key={q.id}
      id={q.id}
      question={q.question}
      allAnswers = {q.allAnswers}
      correct = {q.correctAnswer}
      isAnswered = {q.isAnswered}
      handleAnswered = {handleAnswered}
      showResults = {q.showResults}

  />
)) 

return (
  <div className="mx-auto w-8/12">
    {startVis && <Start hide={hide}/>}
    {!startVis &&  qElements }
    {/* {!startVis && <h1 className=" text-center">SCORE : {score}</h1> } */}
    {!startVis && <button className=" text-xl text-white font-bold w-52 mr-16 bg-black rounded-lg mt-5 " onClick={handleCheckResults}>Check answers</button>}
    {!startVis && <button className=" text-xl text-white font-bold w-52 bg-black rounded-lg mt-5 " onClick={handleTryAgain}>Try again</button>}
  </div>
)
}
