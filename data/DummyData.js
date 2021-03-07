import Product from '../models/Product';

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Red Shirt heheheh',
    'http://34.254.100.228:88/properties/328/images/1614078986529-20141002431439-c09d2644-la.jpg?w=500&h=333&mode=crop',
    'A red t-shirt, perfect for days with non-red weather.',
    29.99
  ),
  new Product(
    'p2',
    'u1',
    'Blue Carpet',
    'http://34.254.100.228:88/properties/226/images/1612874099517-02.jpg?w=500&h=333&mode=crop',
    'Fits your red shirt perfectly. To stand on. Not to wear it.',
    99.99
  ),
  new Product(
    'p3',
    'u2',
    'Coffee Mug',
    'http://34.254.100.228:88/properties/431/images/1614848973362-01.jpg?w=500&h=333&mode=crop',
    'Can also be used for tea!',
    8.99
  ),
  new Product(
    'p4',
    'u3',
    'The Book - Limited Edition',
    'http://34.254.100.228:88/properties/5/images/1607766898996-29.jpg?w=500&h=333&mode=crop',
    "What the content is? Why would that matter? It's a limited edition!",
    15.99
  ),
  new Product(
    'p5',
    'u3',
    'PowerBook',
    'https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=762&q=80',
    'Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!',
    2299.99
  ),
  new Product(
    'p6',
    'u1',
    'Pen & Paper',
    'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
    "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
    5.49
  )
];

export default PRODUCTS;
