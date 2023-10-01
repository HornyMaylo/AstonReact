import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetHistory } from '../../store/slices/historyReducer';

import './HistoryPage.scss';
export default function HistoryPage() {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history.history);
  const filteredHisArr = history.filter(
    (el, ind) => ind === history.indexOf(el),
  );
  if (filteredHisArr.length > 0) {
    return (
      <>
        <button onClick={() => dispatch(resetHistory())}>Reset history</button>
        <div className="historyPage">
          {filteredHisArr.map((item, id) => (
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
