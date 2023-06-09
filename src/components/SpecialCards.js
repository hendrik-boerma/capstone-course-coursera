import './SpecialCards.css'
import { dishes } from '../Data'

function SpecialCards() {


    return (
        <>
            <main>
                <div className="title">
                    <h2>Specials</h2>
                    <a href='/orderonline' className='button'>Online Menu</a>
                </div>
                <div className="cardcontainer">
                    {dishes.map( dish => (
                        <div className="card" key={dish.name}>
                        <img className='cardimage' src={dish.picture} alt={dish.name} />
                        <div>
                            <h4 className='cardtitle' >{dish.name}</h4>
                            <p className="cardprice">$ {dish.price}</p>
                            <p className="cardtext">{dish.description}</p>
                            <a href='/orderonline' className="cardlink">Order a delivery &gt;</a>
                        </div>
                    </div>
                    ))
                    }
                </div>
            </main>
        </>
    );
}

export default SpecialCards;