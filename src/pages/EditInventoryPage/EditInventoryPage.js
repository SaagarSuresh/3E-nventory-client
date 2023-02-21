import "./EditInventoryPage.scss";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function EditInventoryPage(){

    const location = useLocation();

    let value = location.state;

    let itemId = useParams().id;

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
            .patch(`http://localhost:8080/store/item/${itemId}`,{
               store_id: value.store_id,
               truffle_id: formRef.current.truffleName.value || value.truffle_id,
               minimum_truffles_in_container: formRef.current.minTruffles.value,
               truffles_in_container: formRef.current.currentTruffles.value,
               truffles_sold: formRef.current.soldTruffles.value
            })
            .catch((error)=>{
                console.log(error, "Error");
            });
            alert("Inventory has been edited.")
            navigate(-1);
    }

    const [minTruffles, setMinTruffles] = useState(value.minimum_truffles_in_container);
    const [currentTruffles, setCurrentTruffles] = useState(value.truffles_in_container);
    const [soldTruffles, setSoldTruffles] = useState(value.truffles_sold);

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
        <>
        <Header/>
        <section className="edit-inventory">
            
            <section className="edit-inventory__page-bar">
                <h2 className="edit-inventory__page-title">Edit Item</h2>
            </section>
            <section className="edit-inventory__form-container">
                <form className="form" onSubmit={handleOnSubmit} ref={formRef}>
                    <div className="form__input-container">
                    <div className="form__input--left">
                        <label className="form__label">Truffle Name</label>
                        <select
                            id="truffleName"
                            name="truffleName"
                            className="form__input"
                        >
                            <option value="">{value.truffle_name}</option>
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
                                className="form__input"
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
                                className="form__input"
                                placeholder="Enter quantity"
                                name="currentTruffles"
                                id="currentTruffles"
                                onChange={handleCurrentTruffles}
                                value={currentTruffles}
                            />
                        
                        <label className="form__label">TRUFFLES SOLD </label>
                            <input
                                type="text"
                                className="form__input"
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
                    }} className="form__button form__button--cancel">Cancel</button>
                    <button type="submit" className="form__button form__button--edit">Edit</button>
                    </div>
                    
                </form>
            </section>
        </section>
        </>
    )
}