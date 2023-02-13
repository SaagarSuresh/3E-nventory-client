import TruffleListItem from "../TruffleListItem/TruffleListItem";
import "./TruffleList.scss";

export default function TruffleList({truffleList}){

    if(!truffleList) return <p>Loading...</p>;
 
    return(
        <section className="truffle-list">
            {truffleList.map((truffle)=>{
                return(
                    <TruffleListItem
                        key={truffle.id}
                        truffleItem={truffle}
                    />
                )
            })}
        </section>
    )
}