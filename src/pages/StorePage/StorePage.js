import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PageBar from "../../components/PageBar/PageBar";
import TruffleList from "../../components/TruffleList/TruffleList";
import axios from "axios";
import "./StorePage.scss";
import { useParams } from "react-router-dom";
import DeleteInventory from "../../components/DeleteInventory/DeleteInventory";


export default function StorePage(){

    const [inventoryList, setInventoryList] = useState([]);
    const [render, setRender] = useState(false);
    const [currentInventory, setCurrentInventory] = useState("");
    const [currentInventoryId, setCurrentInventoryId] = useState("");
    const [renderInventoryList, setRenderInventoryList] = useState(true);

    let storeId = useParams().id;

    useEffect(()=>{
        
        async function getInventoryList(){
            const {data} = await axios.get(`http://localhost:8080/store/${storeId}`);
            setInventoryList(data);
        }

        if (renderInventoryList) {
            getInventoryList();
            setRenderInventoryList(false);
          }
        
          getInventoryList();
        
    }, [storeId, renderInventoryList])
    
    return(
        <section className="storepage">
            {render && (
            <DeleteInventory
            setRender={setRender}
            currentInventory={currentInventory}
            currentInventoryId={currentInventoryId}
            setRenderInventoryList={setRenderInventoryList}
            />
            )}
            <Header/>
            {inventoryList[0] && <PageBar storeName={inventoryList[0].store_name} storeId={storeId}/>}
            <section className="truffle-list">
                <section className="truffle-list__labels-container">
                    <span className="truffle-list__label--1">
                        TRUFFLE NAME
                    </span>
                    <span className="truffle-list__label--2">
                        TRUFFLES IN CONTAINER
                    </span>
                    <span className="truffle-list__label--3">
                        TRUFFLES SOLD
                    </span>
                    <span className="truffle-list__label--4">
                        TRUFFLES TO BE DIPPED
                    </span>
                </section>
            </section>
            <TruffleList 
            setRender={setRender}
            setCurrentInventory={setCurrentInventory}
            setCurrentInventoryId={setCurrentInventoryId}
            truffleList={inventoryList} 
            />
        </section>
    )
}