import './Menu.css'
import { foods } from '../Data.js'

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
                    {foods.map( food => (
                    <tr>
                        <td>{food.name}</td>
                        <td>$ {food.price}</td>
                    </tr>
                    ))}
                </table>
            </main>
        </>
    );
}

export default Menu;