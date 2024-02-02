import './Menu.css'
import { dishes } from '../Data.js'

function Menu() {
    const starters = dishes.filter((dish) => dish.category === 'starter');
    const mains = dishes.filter((dish) => dish.category === 'main');
    const desserts = dishes.filter((dish) => dish.category === 'dessert');

    return (
        <>
            <main>
                <h2>Menu</h2>
                <table>
                    <tr>
                        <th>Starters</th>
                    </tr>
                    {starters.map( dish => (
                    <tr>
                        <td>{dish.name} - {dish.price}
                            <span>{dish.description}</span>
                        </td>
                    </tr>
                    ))}

                    <tr>
                        <th>Main</th>
                    </tr>
                    {mains.map( dish => (
                    <tr>
                    <td>{dish.name} - {dish.price}
                        <span>{dish.description}</span>
                    </td>
                </tr>
                    ))}

                    <tr>
                        <th>Dessert</th>
                    </tr>
                    {desserts.map( dish => (
                    <tr>
                    <td>{dish.name} - {dish.price}
                        <span>{dish.description}</span>
                    </td>
                </tr>
                    ))}
                    
                </table>
            </main>
        </>
    );
}

export default Menu;