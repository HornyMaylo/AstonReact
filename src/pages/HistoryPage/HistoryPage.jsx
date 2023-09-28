import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetHistory } from '../../store/slices/historyReducer';

import './HistoryPage.scss';
export default function HistoryPage() {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history.history);

  if (history.length > 0) {
    return (
      <>
        <button onClick={() => dispatch(resetHistory())}>Reset history</button>
        <div className="historyPage">
          {history.map((item, id) => (
            <Link key={id} to={`/search/${item}`}>
              {item}
            </Link>
          ))}
        </div>
      </>
    );
  }
  return (
    <div className="historyPage">
      <div className="placeHolder">History is clear now</div>
    </div>
  );
}
