import "./PageBar.scss";

export default function PageBar({storeName}){
    return(
        <section className="pagebar">
            <div className="pagebar__container">
                <h2 className="pagebar__text">{storeName}</h2>
                <button className="pagebar__button">Add New Item</button>
            </div>
        </section>
    )
}