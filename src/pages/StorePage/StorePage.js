import Header from "../../components/Header/Header";
import PageBar from "../../components/PageBar/PageBar";
import "./StorePage.scss";

export default function StorePage(){
    return(
        <section className="storepage">
            <Header/>
            <PageBar/>
            <section className="truffle-list">
                <section className="truffle-list__labels-container">
                    <span className="truffle-list__label">
                        TRUFFLE NAME
                    </span>
                    <span className="truffle-list__label">
                        TRUFFLES IN CONTAINER
                    </span>
                    <span className="truffle-list__label">
                        TRUFFLES SOLD
                    </span>
                    <span className="truffle-list__label">
                        TRUFFLES TO BE DIPPED
                    </span>
                </section>
            </section>
        </section>
    )
}