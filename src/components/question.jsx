const Question = (props) => {

    let answers  = [] 

    const randomizeAnswers = () => {
        props.wrong.forEach(ans => {
            answers.push(ans)
        })
        answers.push(props.correct)
        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
          }
        
        answers = answers.map(element => ({answer : element , choosen : false}))
        console.log
    }

    randomizeAnswers()
  
    return(
        <div className=" pb-6 my-2 border-b-2 border-gray-300">
            <h1 className=" font-bold mb-2">{props.question}</h1>
            <label className=" bg-gray-300 px-2 mr-2 text-sm py-1 rounded-lg"><i>{answers[0].answer}</i><input name={props.id} type="radio" /></label>
            <label className=" bg-gray-300 px-2 mr-2 text-sm py-1 rounded-lg"><i>{answers[1].answer}</i><input name={props.id} type="radio" /></label>
            <label className=" bg-gray-300 px-2 mr-2 text-sm py-1 rounded-lg"><i>{answers[2].answer}</i><input name={props.id} type="radio" /></label>
            <label className=" bg-gray-300 px-2 mr-2 text-sm py-1 rounded-lg"><i>{answers[3].answer}</i><input name={props.id} type="radio" /></label>
        </div>
    )
}

export default Question