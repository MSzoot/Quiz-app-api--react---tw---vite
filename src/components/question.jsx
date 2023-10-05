import { useEffect, useState } from "react";

const Question = (props) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleRadioChange = (event) => {
    if(!props.showResults){
    setSelectedAnswer(event.target.value);
    props.handleAnswered(event.target.value)
    }
  };

  const styles = {
    default : "bg-gray-200 mx-2 py-1 px-4 rounded-lg text-xs whitespace-nowrap",
    answered : "bg-blue-300 mx-2 py-1 px-4 rounded-lg text-xs whitespace-nowrap",
    correct : "bg-green-300 mx-2 py-1 px-4 rounded-lg text-xs whitespace-nowrap",
    incorrect: "bg-red-300 mx-2 py-1 px-4 rounded-lg text-xs whitespace-nowrap"
  }


    return (
        <div className="mx-auto m-4 pb-4 border-b border-gray-200">
            <h1 className="font-bold py-4">{props.question}</h1>
            <div>
            {props.allAnswers.map(answer => {
              let className = styles.default;

              if (selectedAnswer === answer) {
                if (selectedAnswer === props.correct && props.showResults) {
                  className = styles.correct;
                } else if (selectedAnswer != props.correct && props.showResults) {
                  className = styles.incorrect;
                } else {
                  className = styles.answered;
                }
              }
              return (
                <label key={answer} className={className}>
                  {answer}
                  <input
                    type="radio"
                    className=" sr-only"
                    name={props.id}
                    value={answer}
                    checked={selectedAnswer === answer}
                    onChange={handleRadioChange}
                  />
                </label>
              );
            })}

            </div>
        </div>
    )
}

export default Question ; 