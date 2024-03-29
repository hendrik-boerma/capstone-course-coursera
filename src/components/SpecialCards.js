import './SpecialCards.css'
import { dishes } from '../Data'
import { Link } from "react-router-dom";

function SpecialCards() {


    return (
        <>
            <main>
                <div className="title">
                    <h2>Specials</h2>
                    <Link to='/menu' className='button'>Online Menu</Link>
                </div>
                <Link to="/menu" className="cardlink">
                <div className="cardcontainer">
                    {dishes.slice(0, 3).map( dish => (
                        <div className="card" key={dish.name}>
                        <img className='cardimage' src={dish.picture} alt={dish.name} />
                        <div>
                            <h4 className='cardtitle' >{dish.name}</h4>
                            <p className="cardprice">$ {dish.price}</p>
                            <p className="cardtext">{dish.description}</p>
                            <p to="/menu" className="cardlink">Watch menu &gt;</p>
                        </div>
                    </div>
                    ))
                    }
                </div>
                    </Link>
            </main>
        </>
    );
}

export default SpecialCards;