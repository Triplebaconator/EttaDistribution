import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'schicherchia',
          email: 'schicherchia@aol.com',
          password: bcrypt.hashSync('PW12345', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products:[
    {
        name: 'Unroasted Mexican Chiapas 10lb',
        category: 'Unroasted Coffee',
        image: '/images/p1.jpg',
        price: 44.95,
        origin: 'Mexico',
        countInStock: 500,
        rating: 4.0,
        numReviews: 12,
        description: 'Unroasted Mexican Chiapas EP, HG 10 pound bag'
    }, 
    {
        name: 'Unroasted Mexican Chiapas 70kg',
        category: 'Unroasted Coffee',
        image: '/images/p3.jpg',
        price: 649.95,
        origin: 'Mexico',
        countInStock: 10,
        rating: 4.5,
        numReviews: 14,
        description: 'Unroasted Mexican Chiapas European Preparation, High Grown'
    }, 
    {
        name: 'Roasted Mexican Chiapas 5lb',
        category: 'Roasted Coffee',
        image: '/images/p2.jpg',
        price: 44.95,
        origin: 'Mexico',
        countInStock: 0,
        rating: 5.0,
        numReviews: 17,
        description: 'Roasted Mexican Chiapas EP, HG 5 pound bag'
    }, 
    {
        name: 'Ground Mexican Chiapas 3oz, case of 24',
        category: 'Ground Coffee',
        image: '/images/p4.jpg',
        price: 44.95,
        origin: 'Mexico',
        countInStock: 50,
        rating: 3.5,
        numReviews: 8,
        description: 'Roasted Ground Mexican Chiapas for use with 12 cup coffee maker'
    }, 

    ],
};
export default data;
