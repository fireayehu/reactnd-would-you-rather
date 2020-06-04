# Would You Rather

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for the Google Udacity React Nanodegree program.

## Available Scripts

In the project directory, you can run:

### `yarn` or `npm install`

Installs all the required packages

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Folder Structure

```bash
├── README.md - This file.
├── package.json # Package manager file.
├── public
│   ├── favicon.ico # React Icon,
│   └── index.html # Base html structure
│   └── manifest.json # Manifest file.
└── src
    ├── actions # Redux Actions
    │   ├── authedUser.js # actions related to authedUser
    │   ├── questions.js # actions related to questions
    │   ├── shared.js # shared actions
    │   ├── users.js # actions related to users
    ├── components # React Components
    │   ├── App.js # handles which component to render
    │   ├── Dashboard.js # contains details about user's answered and unanswered questions
    │   ├── NotFound.js # show 404 error when page does not exists
    │   ├── Leaderboard.js # show user standings based on their interaction with app
    │   ├── Navbar.js # contains link to different pages and logged in user
    │   ├── NewQuestion.js # allow logged in user to add new question
    │   ├── Question.js # contain details about a particular question
    │   ├── QuestionDetails.js # complete question details
    │   ├── Login.js # allow user to sign in with one of the registered user
    ├── middleware # Redux Middlewares
    │   ├── index.js # apply thunk and logger middleware
    │   ├── logger.js # log action and new state
    ├── reducers # Redux Reducers
    │   ├── authedUser.js # reducer for authedUser
    │   ├── index.js # combine reducers
    │   ├── questions.js # reducer for questions
    │   ├── users.js # reducer for to users
    ├── utils # Utility files
    │   ├── _DATA.js # api for this project
    │   ├── api.js # functions that connect with api
    │   ├── helpers.js # helper function for api
    ├── index.css # Global styles.
    └── index.js # Used for DOM rendering only.
```

## Author

- **Fireayehu Zekarias**

## Acknowledgments

- Udacity For the providing the project
