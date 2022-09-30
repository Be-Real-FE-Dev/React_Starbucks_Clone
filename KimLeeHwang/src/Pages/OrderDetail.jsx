import OrderInfo from '../components/OrderInfo'
import Amount from '../components/UI/Amount'
import Button from '../components/UI/Button';
import { useParams } from 'react-router';
import data from '../../store/data'

const OrderDetail = () => {
  const {id} = useParams();
  console.log(id)
  const filteredData = data.filter(item => item.id === +id);
  console.log(data);
  return (
    <div>
      <OrderInfo item={filteredData[0]}/>
      <Amount />
      <Button>담기</Button>
    </div>
  );
};

export default OrderDetail;
