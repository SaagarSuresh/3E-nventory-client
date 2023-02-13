import { Link } from "react-router-dom";
import "./TruffleListItem.scss";
import deleteImg from "../../assets/images/delete_outline-24px.svg"
import editImg from "../../assets/images/edit-24px.svg"

export default function TruffleListItem({truffleItem}){
    return(
        <section className="truffle-list-item">
            <div className="truffle-list-item__container">
                <span className="truffle-list-item__item">
                    {truffleItem.truffle_name}
                </span>
                <span className="truffle-list-item__item">
                    {truffleItem.truffles_in_container}
                </span>
                <span className="truffle-list-item__item">
                    {truffleItem.truffles_sold}
                </span>
                <span className="truffle-list-item__item">
                    {(truffleItem.truffles_in_container - truffleItem.truffles_sold)}
                </span>
            </div>
            <div className="truffle-list-item__icon-wrapper">
                <img src={deleteImg} alt="" className="truffle-list-item__icon" />
                <img src={editImg} alt="" className="truffle-list-item__icon" />
            </div>
        </section>
    )
}