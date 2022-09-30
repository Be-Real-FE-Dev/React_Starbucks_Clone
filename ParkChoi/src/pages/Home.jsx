import Beverage from '../components/Beverage';
import { useSelector } from 'react-redux';

const Home = () => {
  const products = useSelector((state) => state.products.products);

  const loadedProducts = [];

  for (const key in products) {
    loadedProducts.push({
      id: key,
      name: products[key].name,
      engName: products[key].engName,
      image: products[key].image,
      price: products[key].price,
    });
  }

  return (
    <>
      <h1>Starbucks Mini</h1>
      <div>
        <ul>
          {loadedProducts.map((product) => (
            <Beverage key={product.id} {...product} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
