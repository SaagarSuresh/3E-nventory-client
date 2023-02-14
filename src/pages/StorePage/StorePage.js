import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PageBar from "../../components/PageBar/PageBar";
import TruffleList from "../../components/TruffleList/TruffleList";
import axios from "axios";
import "./StorePage.scss";
import { useParams } from "react-router-dom";


export default function StorePage(){

    const [inventoryList, setInventoryList] = useState([]);

    let storeId = useParams().id;

    useEffect(()=>{
        
        async function getInventoryList(){
            const {data} = await axios.get(`http://localhost:8080/store/${storeId}`);
            setInventoryList(data);
        }
        getInventoryList()
    }, [storeId])
    
    return(
        <section className="storepage">
            <Header/>
            {inventoryList[0] && <PageBar storeName={inventoryList[0].store_name} storeId={storeId}/>}
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
            <TruffleList truffleList={inventoryList} />
        </section>
    )
}