import { NextPage } from 'next';
import { Question } from '../models';

interface QuestionsProps {
  questions: Question[];
}

const Questions: NextPage<QuestionsProps> = ({ questions }) => {
  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map((question) => (
        //   <li key={question.id}>
        //     <a href={`/questions/${question.id}`}>{question.title}</a>
        //   </li>
        <h1>{question}</h1>
        ))}
      </ul>
    </div>
  );
};

export default Questions;