const Question = (props) => {

    const answersObjArr = props.allAnswers
    

    return(
        <div className="pb-6 my-2 border-b-2 border-gray-300">
            <h1 className="font-bold mb-2">{props.question}</h1>
                {answersObjArr.map((answer, index) => (
            <label
                key={index}
                className={answersObjArr.choosen
                    ? "bg-green-300 px-2 mr-2 text-sm py-1 rounded-lg"
                    : "bg-gray-300 px-2 mr-2 text-sm py-1 rounded-lg"
                  }>
            <i>{answer.content}</i>
            <input
                name={props.id}
                type="radio"
                onClick={() =>props.handleClick(answer.content)}
            />
        
           </label>
      ))}
    </div>
  );
};

export default Question