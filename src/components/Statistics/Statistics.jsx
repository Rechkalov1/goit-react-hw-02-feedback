import {Component} from 'react'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
export class Statistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
      countTotalFeedback =(propertyName) =>{
        this.setState ((prevState)=>{
            const value = prevState[propertyName];
            return {
                [propertyName]:value +1,
            }
        })
      };
    render(){
        const {good,neutral,bad,} = this.state;
        return(
            <div>
            <Section title="Please leave feedback">
                <button onClick={()=>this.countTotalFeedback("good")}>Good</button>
                <button onClick={()=>this.countTotalFeedback("neutral")}>Neutral</button>
                <button onClick={()=>this.countTotalFeedback("bad")}>Bad</button>
            </Section>
           <Section title="Statistics">
            <FeedbackOptions>
                <ul>
                    <li>Good:{good}</li>
                    <li>Neutal:{neutral}</li>
                    <li>Bad:{bad}</li>
                    <li>Total:</li>
                    <li>Positive feedback:</li>
                </ul>
            </FeedbackOptions>
           </Section>
           
        </div>
        )
    }
}