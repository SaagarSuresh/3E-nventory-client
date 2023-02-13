import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PageBar from "../../components/PageBar/PageBar";
import TruffleList from "../../components/TruffleList/TruffleList";
import axios from "axios";
import "./StorePage.scss";


export default function StorePage(){

    const [inventoryList, setInventoryList] = useState([])

    useEffect(()=>{
        async function getInventoryList(){
            const {data} = await axios.get(`http://localhost:8080/store`);
            console.log(data);
            setInventoryList(data);
        }
        getInventoryList()
    }, [])
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
            <TruffleList truffleList={inventoryList} />
        </section>
    )
}