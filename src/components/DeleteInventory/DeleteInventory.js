import "./DeleteInventory.scss";
import closeImg from "../../assets/images/close-24px.svg";
import axios from "axios";

export default function DeleteInventory(props){


    function handleClick() {
        props.setRender(false);
      }
    
      function handleDelete() {
        async function deleteInventoryReq() {
          const { data } = await axios.delete(`http://localhost:8080/store/item/${props.currentInventoryId}`);
          props.setRenderInventoryList(true);
          props.setRender(false);
        }
        deleteInventoryReq();
      }

    return (
        <div className="background">
          <section className="delete-inventory">
            <section className="delete-inventory__icon">
              <img
                className="delete-inventory__icon--item"
                src={closeImg}
                alt="close icon"
                onClick={handleClick}
              />
            </section>
            <h1 className="delete-inventory__header">
              Delete {props.currentInventory} inventory?
            </h1>
            <p className="delete-inventory__content">
              Please confirm that you'd like to delete {props.currentInventory} from
              the list of inventories. You won't be able to undo this action.
            </p>
    
            <div className="delete-inventory__buttons-wrap">
              {/* <div className="delete-inventory__button" onClick={handleClick}>
                <Button btnClass={"button__secondary"} btnText={"Cancel"} />
              </div> */}
              <button className="delete-inventory__button" onClick={handleClick} >Cancel</button>
              {/* <div className="delete-inventory__button" onClick={handleDelete}>
                <Button btnClass={"button__delete"} btnText={"Delete"} />
              </div> */}
              <button className="delete-inventory__button" onClick={handleDelete} >Delete</button>
            </div>
          </section>
        </div>
      );
}