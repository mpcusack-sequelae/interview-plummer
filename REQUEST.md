# lore-exercise
A sophisticated and user-friendly Online Health-related Quiz Platform for adults 25-60

## Original Request
Take Home Exercise Overview:

In response to an imminent business need, we require the development of sophisticated and user-friendly Online Health-related Quiz Platform for adults 25-60 with enhanced features, including dynamic quizzes, result analytics, and a basic administrator dashboard. Initially the questions will from a defined list but in the very near future questions will need to come from Generative AI and will be personalized to the user and build on the responses to previous questions.  The models that support this will not be ready for several weeks which means the quiz system will need to be developed concurrently and while there is some time for final testing, it is very limited.  Consideration also needs to be given to a large expected increases in future demand (100x current) as well as additional growth of overall capabilities and monitoring/logging.

Additional Considerations:
* Front end using React.js, strongly preferred
* Back end using Python (e.g. Fast API), strongly preferred.
* Allows for diverse question types and navigation controls.
* Results analytics cover both individual and population performance.  
* Administrative functionalities include quiz creation, result analysis, and user management.

In this exercise, we aim to assess the following aspects:
1. Problem-Solving Skills: Demonstrate your ability to address a complex and ambiguous problem
2. Consideration of Situation: Demonstrate ability to think through and address/overcome challenges that may arise during the effort. Capture and list any qualified and contextual assumptions you make.  
3. Working Code: For parts you didn’t fully implement, describe details via written text and/or diagrams.

Submission Details:
* Please prepare your solution and supporting documentation and submit them to mgray@sequel.ae by Monday July 22nd before Noon Central Time. 
* If you decide to use GitHub instead to share your code, please ensure the following people have access: mgray@sequel.ae, rmohan@sequel.ae, wrosko@sequel.ae, jgaff@sequel.ae, bstober@sequel.ae, jtezanos@sequel.ae, mcusask@sequel.ae, bnagar@sequel.ae
* Ensure that your submission is well-organized and documented and includes clear explanations of your approach, design decisions, and how to access and deploy your code.  Ideally we would be able to also see your commit history to understand how the code evolved.
* We will review the submission internally and set up a follow-up meeting where we will ask additional questions and you can provide further explanations.  
* At the end of this meeting, we will do a live coding session based on a requested update to your code.

### Needs clarification
* Define "sophisticated"
  * Has to be generative
* Define "user-friendly"
* Define "enhanced features"
  * 
* Define "dynamic quizzes"
* What types of analytics do you want to capture?
  * 
* What types of "questions will from a defined list"?
  * Is there a set of existing questions to choose from?
* Which models will be available?
* Confirm what "it" is in: "it is very limited".
  * "the models"
  * "defined list"
  * "final testing"
* Define "current" from: "future demand (100x current)"
  * 1000's, needs to be 100,000s
* Define "diverse question types"
  * 
* Define "navigation controls".
  * Are they diverse as well?
* What is used for analytics?
* Describe "individual" and "population performance"
* There doesn't seem like a need for pre-rendered, but I've been wrong before
* What eventual database? Seems relational
  * user
  * user-answers
  * quizzes
  * quiz-questions

## Features
* dynamic quizzes
* multi-lingual?
* result analytics
* basic administrator dashboard
* needs to be general enough for working in tandem
* local storage for immediate save
* initial list of quizzes/questions

## Requirements
### Functional POC, local
* React.js front end
* React.js administrative backend
  * Quiz creation
  * result analysis
  * user management
* Fast API
* Question types
  * TODO
* Navigation controls using
  * TODO
* Analytics Monitoring uses TODO
* Capture of user's answers
* Imitation LLM questions

### Functional POC, deployed/staging
* Virtual machine for quiz download
  * No cold start, scales as needed
* Serverless endpoints for saving
* Sql like server, in-memory for local development

### Functional Possible Future Needs
* Translations?

### Non-Functional
* High concurrency (needs starting point to be clear)
* Low latency between questions. Using an LLM/Generative ML here will be tricky.

