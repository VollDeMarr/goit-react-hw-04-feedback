import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const el = options.map(option => (
    <button
      key={option}
      className={s.btn}
      type="button"
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));

  return <div>{el}</div>;
};
export default FeedbackOptions;
