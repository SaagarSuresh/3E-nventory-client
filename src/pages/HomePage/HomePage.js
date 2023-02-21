import Header from "../../components/Header/Header";
import "./HomePage.scss";

export default function HomePage(){
    return(
        <section className="homepage">
            <Header/>
            <section className="homepage__content">
            <h2>Welcome to 3E-nventory!</h2>
            <h3>The Easy, Efficient and Elegent Inventory Tracking System!!!</h3>
            </section>
            
        </section>
    )
}