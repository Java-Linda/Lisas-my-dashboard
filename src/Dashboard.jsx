import ButtonAppBar from './ButtonAppBar';
import BasicTable from './BasicTable';
import { mockTransactions } from '../mockData';

const Dashboard = () => {
  return (
    <section id='dashboard'>
      <h1>Dashboard</h1>
      <ButtonAppBar />
      <BasicTable passedInProps={mockTransactions} />
    </section>
  );
};

export default Dashboard;
