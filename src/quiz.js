class Quiz {
    // YOUR CODE HERE:
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions [this.currentQuestionIndex];
    }

    moveToNextQuestion() {
        return this.currentQuestionIndex =+ 1;
    }


    shuffleQuestions() {
        let currentIndex1 = this.questions.length;

    while (currentIndex1 != 0) {
      let randomIndex1 = Math.floor(Math.random() * currentIndex1);
      currentIndex1--;

      [this.questions[currentIndex1], this.questions[randomIndex1]] = [
        this.questions[randomIndex1],
        this.questions[currentIndex1],
      ];
    }
    }

    checkAnswer(answer) {
        const currentQuestion = this.question[this.currentQuestionIndex];

        if (answer === currentQuestion.correctAnswers) {
            this.correctAnswers++;
        }
    }



    // 1. constructor (questions, timeLimit, timeRemaining)

    // 2. getQuestion()
    
    // 3. moveToNextQuestion()

    // 4. shuffleQuestions()

    // 5. checkAnswer(answer)

    // 6. hasEnded()
}