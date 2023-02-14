import TruffleListItem from "../TruffleListItem/TruffleListItem";
import "./TruffleList.scss";

export default function TruffleList({truffleList, setRender, setCurrentInventory, setCurrentInventoryId}){

    if(!truffleList) return <p>Loading...</p>;
 
    return(
        <section className="truffle-list">
            {truffleList.map((truffle)=>{
                return(
                    <TruffleListItem
                        key={truffle.id}
                        setRender={setRender}
                        setCurrentInventory={setCurrentInventory}
                        setCurrentInventoryId={setCurrentInventoryId}
                        truffleItem={truffle}
                    />
                )
            })}
        </section>
    )
}