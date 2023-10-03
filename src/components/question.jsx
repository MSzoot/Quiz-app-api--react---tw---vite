import { useEffect, useState } from "react";

const Question = (props) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedAnswer(event.target.value);
    props.handleAnswered(event.target.value)
  };

  const styles = {
    default : "bg-gray-200 mx-2 p-1 rounded-lg text-xs whitespace-nowrap",
    answered : "bg-blue-300 mx-2 p-1 rounded-lg text-xs whitespace-nowrap",
    correct : "bg-green-300 mx-2 p-1 rounded-lg text-xs whitespace-nowrap",
    incorrect: "bg-red-300 mx-2 p-1 rounded-lg text-xs whitespace-nowrap"
  }

  useEffect(()=>{
    console.log(selectedAnswer)
  },[selectedAnswer])

    return (
        <div className="mx-auto m-4 pb-4 border-b border-gray-200">
            <h1 className="font-bold py-4">{props.question}</h1>
            <div>
            {props.allAnswers.map(answer => (
               <label key={answer} className={selectedAnswer === answer ? styles.answered : styles.default }>{answer}<input type="radio"
                    name={props.id} value={answer}
                    checked={selectedAnswer === answer} 
                    onChange={handleRadioChange}/>
               </label>
            ))}
            </div>
        </div>
    )
}

export default Question ; 