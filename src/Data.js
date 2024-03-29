import salad from './images/greek salad.jpg'
import bruschetta from './images/bruchetta.jpeg'
import lemondessert from './images/lemon dessert.jpg'

export const dishes = [
    {
        name: 'Salad',
        price: '13',
        description: 'Salad with Feta, tomatoes, green pepper, onion and cucumber',
        picture: salad,
        category: 'starter'
    },
    {
        name: 'Bruschetta',
        price: '8',
        description: 'Toast with tomato, balsamico and basil',
        picture: bruschetta,
        category: 'starter'
    },
    {
        name: 'Lemon Dessert',
        price: '7',
        description: 'Cake with lemon filling',
        picture: lemondessert,
        category: 'dessert'
    },
    {
        name: 'Pasta Carbonara',
        price: '15',
        description: 'Spaghetti with creamy carbonara sauce, bacon, and Parmesan cheese',
        category: 'main'
    },
    {
        name: 'Grilled Salmon',
        price: '18',
        description: 'Grilled salmon fillet with lemon and dill, served with steamed vegetables',
        category: 'main'
    },
    {
        name: 'Mushroom & Truffle Risotto',
        price: '19',
        description: 'Creamy risotto infused with the earthy flavors of wild mushrooms and truffle oil, garnished with Parmesan shavings.',
        category: 'main'
    },
    {
        name: 'Chicken Caesar Salad',
        price: '14',
        description: 'Grilled chicken breast on a bed of romaine lettuce with Caesar dressing and croutons',
        category: 'main'
    },
    {
        name: 'Chocolate Fondue',
        price: '10',
        description: 'Assorted fruits and marshmallows served with rich melted chocolate',
        category: 'dessert'
    }
];