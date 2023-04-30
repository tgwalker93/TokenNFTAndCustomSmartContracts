import React, { useState, useEffect } from 'react';
import { ConnectWallet, ThirdwebProvider, useContract, useAddress  } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";

function QuestionPage(props) {
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');
  const [newBalance, setNewBalance] = useState('');
  const currentWalletAddress = useAddress();
//   this.state = {
//     newBalance: 0
//   }


  useEffect(() => {
    // Fetch the question and its answers from an API
    const fetchQuestion = async () => {
    //   const response = await fetch(`https://example.com/questions/${props.questionId}`);
    //   const data = await response.json();
    //   setQuestion(data.question);
    //   setAnswers(data.answers);
        const sdk = new ThirdwebSDK("goerli");
        const contract = await sdk.getContract("0xba60D11B168919f87fad91A0197Dce0D3Bc3b5dB");
        
        const balance = await contract.erc20.balanceOf(currentWalletAddress);
        newBalance = balance;
        this.setState({ 
            newBalance: balance
        })
    };

    fetchQuestion();
  }, [props.questionId]);

  const handleNewAnswerChange = (event) => {
    setNewAnswer(event.target.value);
  };

  const handleNewBalanceChange = (event) => {
    setNewBalance(event.target.value);
  };

  const handleNewAnswerSubmit = async (event) => {
    event.preventDefault();

    // // Submit the new answer to the API
    // const response = await fetch(`https://example.com/questions/${props.questionId}/answers`, {
    //   method: 'POST',
    //   body: JSON.stringify({ answer: newAnswer }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });

    // const data = await response.json();
    // setAnswers([...answers, data.answer]);
    // setNewAnswer('');
  };

  return (
    <div>
        <div className="connect">
           <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center'}} />
         </div>
        <h3>Current Balance: 0{newBalance}</h3>
      <h1>{question.title}</h1>
      <p>{question.description}</p>

      <h2>Answers</h2>
      <ul>
        {answers.map((answer) => (
          <li key={answer.id}>{answer.text}</li>
        ))}
      </ul>

      <h2>Add a new answer</h2>
      <form onSubmit={handleNewAnswerSubmit}>
        <textarea value={newAnswer} onChange={handleNewAnswerChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QuestionPage;