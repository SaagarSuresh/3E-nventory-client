import { Link } from "react-router-dom";
import "./PageBar.scss";

export default function PageBar({storeName, storeId}){
    return(
        <section className="pagebar">
            <div className="pagebar__container">
                <h2 className="pagebar__text">{storeName}</h2>
                <Link to = {`/newInventory/${storeId}`}>
                <button className="pagebar__button">Add New Item</button>
                </Link>
            </div>
        </section>
    )
}