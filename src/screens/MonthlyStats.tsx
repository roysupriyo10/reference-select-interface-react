import { useParams } from 'react-router-dom';

const MonthlyStats = () => {
  const params = useParams();

  console.log(params);

  return (
    <div>MonthlyStats</div>
  );
}

export default MonthlyStats;
