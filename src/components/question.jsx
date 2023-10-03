import { useEffect, useState } from "react";

const Question = (props) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  useEffect(()=>{
    console.log(selectedAnswer)
  },[selectedAnswer])

    return (
        <div className="w-8/12 mx-auto m-4 pb-4 border-b border-gray-200">
            <h1 className="font-bold py-4">{props.question}</h1>
            <div>
            {props.allAnswers.map(answer => (
               <label className={selectedAnswer === answer? "bg-blue-300 mx-2 p-1 rounded-lg text-xs" : "bg-gray-200 mx-2 p-1 rounded-lg text-xs" }>{answer}<input type="radio" name={props.id} value={answer}checked={selectedAnswer === answer} onChange={handleRadioChange}/></label>
            ))}
            </div>
        </div>
    )
}

export default Question ; 