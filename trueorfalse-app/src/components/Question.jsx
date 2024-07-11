import { useEffect, useState } from "react";

export default function Question() {

    document.title = "True Or False"

    const [category, setCategory] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const getQuestion = async() => {
        let response = await fetch("https://opentdb.com/api.php?amount=1&type=boolean",
            {method: "get"}
        );
            let data = await response.json();
            setCategory(data.results[0].category)
            setQuestion(data.results[0].question)
            setAnswer(data.results[0].correct_answer)
    }
        getQuestion();
    }, [])

    let revealAnswer = (revealed) ? `Answer: ${answer}` : "";

    return (
        <div>
            <div id="category" dangerouslySetInnerHTML={{__html: `Category: ${category}`}} />
            <div id="question" dangerouslySetInnerHTML={{__html: `<h2>${question}</h2>`}} />
            <input id="reveal-answer" type="button" value="Reveal Answer" onClick={() => setRevealed(true)}/>
            <div id="question" dangerouslySetInnerHTML={{__html: `${revealAnswer}`}} />
        </div>
    )

}