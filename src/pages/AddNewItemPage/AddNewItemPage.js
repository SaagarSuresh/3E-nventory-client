import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import "./AddNewItemPage.scss";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

export default function AddNewItemPage(){

    let storeId = useParams().id;

    const navigate = useNavigate();
    
    const formRef = useRef();

    const [truffleList, setTruffleList] = useState([]);

    useEffect(()=>{
        try{
            const getTruffleList = async () =>{
                const { data } = await axios.get("http://localhost:8080/store/trufflelist/all");
                setTruffleList(data);
            }
            getTruffleList();
        }catch(err){
            console.log(err.message);
        }
    }, []);

    const handleOnSubmit = (event) =>{
        event.preventDefault();

        axios
            .post("http://localhost:8080/store/item",{
               id:  uuid(),
               store_id: storeId,
               truffle_id: formRef.current.truffleName.value,
               minimum_truffles_in_container: formRef.current.minTruffles.value,
               truffles_in_container: formRef.current.currentTruffles.value,
               truffles_sold: formRef.current.soldTruffles.value
            })
            .catch((error)=>{
                console.log(error, "Error");
            });
            alert("Inventory has been added.")
            navigate("/");
    }

    const [minTruffles, setMinTruffles] = useState("");
    const [currentTruffles, setCurrentTruffles] = useState("");
    const [soldTruffles, setSoldTruffles] = useState("");

    const handleMinTruffles = (e) =>{
        setMinTruffles(e.target.value);
    };
    const handleCurrentTruffles = (e) =>{
        setCurrentTruffles(e.target.value);
    };
    const handleSoldTruffles = (e) =>{
        setSoldTruffles(e.target.value);
    };


    return(
        <section className="add-new-item">
            <Header/>
            <section className="add-new-item__page-bar">
                <h2 className="add-new-item__page-title">Add New Item</h2>
            </section>
            <section className="add-new-item__form-container">
                <form className="form" onSubmit={handleOnSubmit} ref={formRef}>
                    <div className="form__input-container">
                    <div className="form__input--left">
                        <label className="form__label">Truffle Name</label>
                        <select
                            id="truffleName"
                            name="truffleName"
                            className="form__input"
                        >
                            <option value="">Please Select</option>
                            {truffleList && 
                            truffleList.map((truffle)=>{
                                return(
                                    <option value={truffle.id} key={truffle.id}>
                                    {truffle.name}
                                    </option>
                                )
                            })}
                        </select>
                        <label className="form__label">MINIMUM TRUFFLES IN CONTAINER</label>
                            <input
                                type="text"
                                className="form_input"
                                placeholder="Enter quantity"
                                name="minTruffles"
                                id="minTruffles"
                                onChange={handleMinTruffles}
                                value={minTruffles}
                            />
                        
                    </div>
                    <div className="form__input--right">
                    <label className="form__label">TRUFFLES IN CONTAINER </label>
                            <input
                                type="text"
                                className="form_input"
                                placeholder="Enter quantity"
                                name="currentTruffles"
                                id="currentTruffles"
                                onChange={handleCurrentTruffles}
                                value={currentTruffles}
                            />
                        
                        <label className="form__label">TRUFFLES SOLD </label>
                            <input
                                type="text"
                                className="form_input"
                                placeholder="Enter quantity"
                                name="soldTruffles"
                                id="soldTruffles"
                                onChange={handleSoldTruffles}
                                value={soldTruffles}
                            />
                        
                    </div>
                    </div>
                    <div className="form__buttons-wrapper">
                    <button type="button" onClick={() => {
                        navigate(-1);
                    }}>Cancel</button>
                    <button type="submit">Submit</button>
                    </div>
                    
                </form>
            </section>
        </section>
    )
}