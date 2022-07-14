import Notification from '../Notification/Notification';
import s from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {!total ? (
        <Notification message={"Here's no feedback yet"} />
      ) : (
        <>
          <span className={s.span}>Good: {good}</span>
          <span className={s.span}>Neutral: {neutral}</span>
          <span className={s.span}>Bad: {bad}</span>
          <span className={s.span}>Total: {total}</span>
          <span className={s.span}>
            Positive feedback: {positivePercentage}%
          </span>
        </>
      )}
    </div>
  );
};
export default Statistics;
