import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage(propertyName){
const total =this.countTotalFeedback();
if(!total){
  return 0;
}
const value = this.state[propertyName];
const result = (value / total) * 100;
return Number(result.toFixed(2));
  }
  IncrementStatistics = propertyName => {
    this.setState(prevState => {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1,
      };
    });
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const goodPercent = this.countPositiveFeedbackPercentage('good');
    const neutralPercent = this.countPositiveFeedbackPercentage('neutral');
    return (
      <>
        <Section title="Please leave feedback"><>
          <FeedbackOptions IncrementStatistics={this.IncrementStatistics} /></>
        </Section>
        <Section title="Statistics">
          <> {this.countTotalFeedback()=== 0 ?(<Notification/>): (<Statistics good={good} neutral={neutral} bad={bad} total={total} goodPercent={goodPercent} neutralPercent={neutralPercent}/>)}
         
          </>
         
        </Section>
      </>
    );
  }
}
