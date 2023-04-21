import salad from '../images/greek salad.jpg'
import bruchetta from '../images/bruchetta.png'
import lemondessert from '../images/lemon dessert.jpg'

function Main() {

    return(
        <>
        <main>
            <div className="title">
            <h2>Specials</h2>
            <button className='button'>Online Menu</button>
            </div>
            <div className="cardcontainer">
                <div className="card">
                    <img className='cardimage' src={salad} alt="salad" />
                    <div>
                        <h4 className='cardtitle' >Salad</h4>
                        <p className="cardprice">$ 13</p>
                        <p className="cardtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <a href='/home' className="cardlink">Order a delivery &gt;</a>
                    </div>
                </div>
                <div className="card">
                    <img className='cardimage' src={bruchetta} alt="bruchetta" />
                    <div>
                        <h4 className='cardtitle' >Bruchetta</h4>
                        <p className="cardprice">$ 8</p>
                        <p className="cardtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <a href='/home' className="cardlink">Order a delivery &gt;</a>
                    </div>
                </div>
                <div className="card">
                    <img className='cardimage' src={lemondessert} alt="lemondessert" />
                    <div>
                        <h4 className='cardtitle' >Lemon Dessert</h4>
                        <p className="cardprice">$ 7</p>
                        <p className="cardtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <a href='/home' className="cardlink">Order a delivery &gt;</a>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}

export default Main;