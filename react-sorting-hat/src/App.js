import React from "react";
import Quiz from "./components/quiz";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "StartPage",
      answer0: 0,
      answer1: 0,
      answer2: 0,
      answer3: 0,
    };
    this.questions = {
      question1: {
        questionText: "What would you rather be?",
        answerText1: "Trusted",
        answerText2: "Liked",
        answerText3: "Imitated",
        answerText4: "Praised",
        answerText5: "Envied",
        answerText6: "Feared",
      },
      question2: {
        questionText: "which road tempts you",
        answerText1: "Sunny Lane",
        answerText2: "Dark Alley",
        answerText3: "Twisting path through the woods",
        answerText4: "Cobbled street",
      },
      question3: {
        questionText: "Dusk or Dawn?",
        answerText1: "Dusk",
        answerText2: "Dawn",
      },
      question4: {
        questionText: "What is most difficult to deal with?",
        answerText1: "Hunger",
        answerText2: "Cold",
        answerText3: "Loneliness",
        answerText4: "Boredom",
        answerText5: "Being Ignored",
      },
      question5: {
        questionText: "Which power would you choose?",
        answerText1: "Read Minds",
        answerText2: "Invisibility",
        answerText3: "Superhuman Strength",
        answerText4: "Speak to Animals",
        answerText5: "change the past",
        answerText6: "Change your appearance at will",
      },
    };
  }

  render() {
    return (
      <div className="container">
        <h2>HI, WELCOME TO HOGWARTS!! </h2>
        <p>Let's get ya sorted now </p>
        <button> QUIZ </button>
      </div>
    );
  }
}

export default App;
