# High Noon

## Overview

_**High Noon** is a game designed to help increase type speed and accuracy. A user will create an account, play the game, and receive a score based on their ability to type. They will be able to post their scores to a High Score board, as well as comment on the scores posted by other players._

http://high-noon.surge.sh/


<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **High Noon** MVP will be a stylized and functional game, with a working scoreboard and the ability to create, edit, or delete comments on scores._

<br>

### Goals

- _The ability to log in safely with an encrypted password.  and posts it for users to comment on._
- _A functional game in which bandits pop up on screen with words above their head that need to be typed to be defeated. Each word successfully typed and submited will net points, as well as average WPM and player lives being tracked._
- _A scoreboard featuring the top 10 (maybe more?) scores with the username, score, and date created posted._
- _The ability to comment on scores, the users or other users, or edit and delete those comments._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _The front end will be built in react._ |
|   React Router   | _Will provide all routes and links to different pages._ |
|   Axios          | _Used in making CRUD requests._ |
|     Ruby On Rails      | _Managing the back-end with seeded data, controllers, routes, tables, etc.._ |

<br>

### Client (Front End)

#### Wireframes

[Whimsical](https://whimsical.com/high-noon-kxrUQW4gprh7pZ1eQ1m33)

[Wireframe 1: Login and Create Account](https://imgur.com/ScE8Txf)

[Wireframe 2: GameNav and Instructions](https://imgur.com/Xv6o2se)

[Wireframe 3: GameNav and Game](https://imgur.com/fqE4LXI)

[Wireframe 4: PlayerScore and Scoreboard](https://imgur.com/KshD5gL)

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ images
|__ screens/
      |__ Login
      |__ CreateAccount
      |__ GameNav
      |__ Instructions
      |__ Game
      |__ PlayerScore
      |__ ScoreBoard
|__ containers/
      |__ WordsContainer
      |__ CommentsContainer
      |__ ScoresContainer
|__ components
      |__ shared
      |  |__ Header
      |  |__ Layout
      |      |__ Background
      |  |__ Footer
      |__ UserInput
      |__ Timer
      |__ Lives
      |__ Outlaw
      |__ WordBox
      |__ ScoreCard
      |__ CommentCard
      |__ Logo
|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ comments.js
      |__ scores.js
      |__ words.js

```

#### Component Tree

> Use this section to include a link to your component tree.

![Component tree](url)

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                         | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------- | :------: | :------------: | :-----------: | :---------: |
| Build Rails Scaffolding      |    H     |     3 hrs      |     -----     |    -----    |
| Setup Controller Methods     |    H     |     3 hrs      |     -----     |    -----    |
| Setup Routes                 |    H     |     3 hrs      |     -----     |    -----    |
| Build Seed Data for Words    |    H     |     3 hrs      |     -----     |    -----    |
| Test All Routes              |    H     |     3 hrs      |     -----     |    -----    |
| Build React Boilerplate      |    H     |     1 hrs      |     -----     |    -----    |
| Login Screen                 |    H     |     2 hrs      |     -----     |    -----    |
| CreateAccount Screen         |    H     |     2 hrs      |     -----     |    -----    |
| Testing Auth Routes and JWT  |    H     |     4 hrs      |     -----     |    -----    |
| Instruction Screen           |    H     |     1 hrs      |     -----     |    -----    |
| Basic Game Functionality     |    H     |     5 hrs      |     -----     |    -----    |
| PlayerScore Screen           |    H     |     2 hrs      |     -----     |    -----    |
| Scoreboard Screen            |    H     |     3 hrs      |     -----     |    -----    |
| Test Posting to Scoreboard   |    H     |     2 hrs      |     -----     |    -----    |
| CommentCard                  |    H     |     2 hrs      |     -----     |    -----    |
| Test CRUD Comments           |    H     |     5 hrs      |     -----     |    -----    |
| Basic Styling                |    H     |     4 hrs      |     -----     |    -----    |
| TOTAL                        |    -     |     48 hrs     |     -----     |    -----    |
| Post MVP                     |    -     |     -----      |     -----     |    -----    |
| Advanced Styling             |    L     |     ?????      |     -----     |    -----    |
| Transition between screens   |    L     |     ?????      |     -----     |    -----    |
| Moving Outlaw positions      |    L     |     ?????      |     -----     |    -----    |
| Comment on Comments          |    L     |     ?????      |     -----     |    -----    |
| Adding Like Table            |    L     |     ?????      |     -----     |    -----    |
| Building Like Component      |    L     |     ?????      |     -----     |    -----    |


<br>

### Server (Back End)

#### ERD Model

[ERD Model](https://imgur.com/MW1qsxE)

<br>

***

## Post-MVP

> Adding more style and transition animations. Adding the ability to like comments and comment on comments.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
