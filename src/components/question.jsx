import { useForm } from "react-hook-form";


const Question = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const answers  = [] 

    const randomizeAnswers = () => {
        props.wrong.forEach(ans => {
            answers.push(ans)
        })
        answers.push(props.correct)
        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
          }

    }
    randomizeAnswers();

    return(
        <div className=" py-2 my-2 border-b-2 border-gray-300">
            <h1>{props.question}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label><i>{answers[0]}</i><input type="radio"/></label>
            <label><i>{answers[1]}</i><input type="radio"/></label>
            <label><i>{answers[2]}</i><input type="radio"/></label>
            <label><i>{answers[3]}</i><input type="radio"/></label>
            </form>

        </div>
    )
}

export default Question