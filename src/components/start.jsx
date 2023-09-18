
const Start = (props) => {
    return (
    <div className="flex flex-col justify-center items-center h-[600px] gap-6">
        <h1 className=" text-4xl font-bold ">Quzical</h1>
        <p className=" text-gray-600">Refresh your knowledge quick</p>
        <button onClick={props.hide} className=" bg-blue-800 text-white px-8 py-2 rounded-xl">Start Quiz</button>
    </div>
    )
}

export default Start ; 