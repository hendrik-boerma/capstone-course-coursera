import './Menu.css'
import { dishes } from '../Data.js'

function Menu() {

    return (
        <>
            <main>
                <h2>Menu</h2>
                <table>
                    <tr>
                        <th>Food</th>
                        <th>Prices</th>
                    </tr>
                    {dishes.map( dish => (
                    <tr>
                        <td>{dish.name}
                            <span>{dish.description}</span>
                        </td>
                        <td>$ {dish.price}</td>
                    </tr>
                    ))}
                </table>
            </main>
        </>
    );
}

export default Menu;