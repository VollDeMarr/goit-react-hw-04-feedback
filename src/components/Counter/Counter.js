import { Component } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

import styles from './Counter.module.css';

const options = ['good', 'neutral', 'bad'];

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = prop => {
    this.setState(prevState => {
      this.countTotalFeedback();
      return {
        [prop]: prevState[prop] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.floor((good / (good + neutral + bad)) * 100);
  };

  render() {
    return (
      <div className={styles.counter}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.increment} />
        </Section>
        <div>
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          </Section>
        </div>
      </div>
    );
  }
}

export default Counter;
