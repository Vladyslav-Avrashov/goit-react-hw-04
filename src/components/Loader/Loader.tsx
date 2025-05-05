import { PulseLoader } from 'react-spinners';
import s from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={s.loader}>
      <PulseLoader size={120} color="#ff6b6b" speedMultiplier={1.5} />
    </div>
  );
};

export default Loader;
