import './Menu.css';
import { dishes } from '../Data.js';

function Menu() {
    const starters = dishes.filter((dish) => dish.category === 'starter');
    const mains = dishes.filter((dish) => dish.category === 'main');
    const desserts = dishes.filter((dish) => dish.category === 'dessert');

    return (
        <main>
            <h2>Menu</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Starters</th>
                    </tr>
                    {starters.map((dish, index) => (
                        <tr key={index}>
                            <td>{dish.name} - {dish.price}
                                <span>{dish.description}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>

                <tbody>
                    <tr>
                        <th>Main</th>
                    </tr>
                    {mains.map((dish, index) => (
                        <tr key={index}>
                            <td>{dish.name} - {dish.price}
                                <span>{dish.description}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>

                <tbody>
                    <tr>
                        <th>Dessert</th>
                    </tr>
                    {desserts.map((dish, index) => (
                        <tr key={index}>
                            <td>{dish.name} - {dish.price}
                                <span>{dish.description}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}

export default Menu;