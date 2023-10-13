import "./questions.css";
import qna from "./qna.json";

export default function Questions() {

    console.log(qna);
    const qns = qna.question;

    return(
        <>
        <div>
            <p className="fs-1 fw-bold text-center">Question</p>
            <div className="container text-center qns-grid">
                {
                    qns.map((e)=>{
                        return(
                            <>
                            <div className="qns-cards">
                            <div className="qn-card">
                                <p className="fs-5 fw-bold">{e.qn}</p>
                            </div>
                            <div className="ans-card">
                            <p className="fs-6">{e.ans}</p>
                            </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}